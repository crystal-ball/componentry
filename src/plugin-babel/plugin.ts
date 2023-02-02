import { PluginObj, PluginPass, types as t } from '@babel/core'

import { Badge } from '../components/Badge/Badge'
import { Block } from '../components/Block/Block'
import { Flex } from '../components/Flex/Flex'
import { Grid } from '../components/Grid/Grid'
import { Paper } from '../components/Paper/Paper'
import { __initializePreCompileMode } from '../components/Provider/Provider'
import { Text } from '../components/Text/Text'
import { loadConfig } from '../config/load-config'

import { parseAttributes } from './parse-attributes'
import { prepareAttributes } from './prepare-attributes'

// Precompile enabled components - note the type assertion needed as the actual
// evaluated component forwardRef is different from the library types
const components = { Badge, Block, Flex, Grid, Paper, Text } as unknown as {
  [component: string]: {
    $$typeof: symbol
    render: <Props, Ref>(props?: Props, ref?: Ref) => React.ReactElement
  }
}

const config = loadConfig()

/** Plugin customization options */
type PluginOptions = {
  /** Log additional info for plugin debugging */
  debug?: boolean
  /** Flag to include data-<component> attributes on precompiled components */
  dataFlag?: boolean
  /** Components that should be excluded from pre-compilation */
  exclude?: string[]
  /** Additional import path that should qualify components imported as precompilable */
  customImportPath?: string
}
type ComponentryPlugin = PluginObj<
  PluginPass & {
    /** Tracking for whether JSXElement's were imported from Componentry */
    componentryImports: Record<string, true>
    /** Plugin options */
    opts: PluginOptions
    stats: { elementsVisited: number; elementsTransformed: number }
  }
>

let debugEnabled = false

/**
 * Componentry Babel plugin for pre-compiling display components
 */
export default function componentryPlugin(): ComponentryPlugin {
  // Set up user defined default props and theme values for pre-compilation
  __initializePreCompileMode(config)

  const pluginObj: ComponentryPlugin = {
    name: 'componentry-plugin',
    /** Initialize plugin state */
    pre() {
      this.stats = {
        elementsVisited: 0,
        elementsTransformed: 0,
      }
      this.componentryImports = {}
    },
    /** Report plugin compile stats */
    post(this) {
      if (debugEnabled) {
        const { elementsTransformed, elementsVisited } = this.stats
        const filename = this.filename?.replace(this.cwd || '', '')

        console.info(
          `Componentry compile rate for ${filename}: ${
            100 * (elementsTransformed / elementsVisited)
          }% (${elementsVisited} elements visited, ${elementsTransformed} elements transformed)`,
        )
      }
    },

    // --------------------------------------------------------
    // NODE VISITORS

    visitor: {
      /**
       * ImportDeclaration nodes are checked to determine if JSX elements were
       * imported from Componentry
       */
      ImportDeclaration(path, state) {
        const importPath = path.node.source.value
        const { customImportPath } = state.opts

        if (
          importPath === 'componentry' ||
          (customImportPath && importPath.endsWith(customImportPath))
        ) {
          path.node.specifiers.forEach((specifier) => {
            if (t.isImportSpecifier(specifier)) {
              this.componentryImports[specifier.local.name] = true
            }
          })
        }
      },
      /**
       * JSXElement nodes are compiled to HTML elements with classnames whenever
       * possible
       */
      JSXElement(path, state) {
        const { opts, filename } = state
        const { closingElement, openingElement } = path.node

        if (state.opts.debug && !debugEnabled) {
          // Is there a way to access plugin options in plugin post?
          debugEnabled = true
        }

        // We can immediately bail for elements like Table.Cell or Table:Cell
        if (!t.isJSXIdentifier(openingElement.name)) return

        try {
          const { name } = openingElement.name

          // Bail early if this element isn't one of our precompile targets, or
          // if it wasn't imported from componentry
          if (!(name in components) || !(name in this.componentryImports)) return

          // Bail early if this element has been excluded from pre-compiling
          if (state.opts.exclude && state.opts.exclude.includes(name)) return

          this.stats.elementsVisited += 1

          // ✓ At this point we know this is a Componentry pre-compile component,
          // parse the opening element's attributes to determine the prop values
          const { parsedComponentAs, parsedAttributes, passThroughAttributes } =
            parseAttributes(openingElement)

          // Handle option for including a data-component attribute for debugging
          if (opts.dataFlag) parsedAttributes['data-component'] = name

          // Call the component with the parsed attributes to create the pre-compiled result
          const preCompiledElement = components[name].render(parsedAttributes)
          const componentName = getComponentName(parsedComponentAs, preCompiledElement)
          const preparedAttributes = prepareAttributes(
            preCompiledElement.props,
            passThroughAttributes,
          )

          // 🎉 Replace the elements opening and closing elements with our pre-compiled result
          path
            .get('openingElement')
            .replaceWith(
              t.jSXOpeningElement(
                t.jsxIdentifier(componentName),
                preparedAttributes,
                openingElement.selfClosing,
              ),
            )

          if (closingElement) {
            path
              .get('closingElement')
              .replaceWith(t.jSXClosingElement(t.jsxIdentifier(componentName)))
          }

          this.stats.elementsTransformed += 1
        } catch (err) {
          if (opts.debug) {
            console.info(
              // @ts-expect-error -- How to check if message is in type object?
              `Skipping precompile for ${openingElement.name.name} in ${filename} for reason: ${err?.message}`,
            )
          }
        }
      },
    },
  }
  return pluginObj
}

// --------------------------------------------------------
// UTILS

function getComponentName(
  parsedComponentAs: string,
  preCompiledElement: React.ReactElement,
): string {
  if (parsedComponentAs.length) {
    return parsedComponentAs
  }
  if (typeof preCompiledElement.type === 'string') {
    return preCompiledElement.type
  }
  throw new Error('Unsupported precompile component type')
}

/*
 * # Types Notes
 *
 * JSXOpeningElement can be a:
 * 1. JSXIdentifier (eg Table)
 * 2. JSXMemberExpression (eg Table.Cell)
 * 3. JSXNamespacedName (eg Table.Cell)
 *
 * JSXOpeningElement.attributes can contain:
 * 1. JSXAttribute (eg <Flex radical="heck yeah">)
 * 2. JSXSpreadAttribute (eg <Flex {...rest}>)
 *
 * JSXAttribute.name
 * 1. JSXIdentifier (eg <Flex radical="heck yeah">)
 * 2. JSXNamespacedName (eg <Flex name:spaced="attr">)
 *
 * JSXAttribute.value
 * 1. StringLiteral (eg <Flex radical="heck yeah">)
 * 2. JSXExpressionContainer (eg <Flex onRadical={() => {}}>)
 * 3. null (eg <Flex radical>)
 * 4. JSXElement (??? what)
 * 5. JSXFragment (??? what)
 */
