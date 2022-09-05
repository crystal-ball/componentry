import { NodePath, PluginObj, PluginPass, types as t } from '@babel/core'

import { Block } from '../components/Block/Block'
import { Flex } from '../components/Flex/Flex'
import { Grid } from '../components/Grid/Grid'
import { Paper } from '../components/Paper/Paper'
import { __initializePreCompileMode } from '../components/Provider/Provider'
import { Text } from '../components/Text/Text'

import { parseAttributes } from './parse-attributes'
import { prepareAttributes } from './prepare-attributes'

const components = { Block, Flex, Grid, Paper, Text } as unknown as {
  [component: string]: EvaluatedForwardRef
}

/** Plugin customization options */
type PluginOpts = { debug?: boolean; dataFlag?: boolean }

/**
 * Componentry Babel plugin for pre-compiling display components
 */
export default function plugin(): PluginObj {
  __initializePreCompileMode({}) // TODO: Accept prop overrides through options

  return {
    name: 'componentry-plugin',
    visitor: {
      JSXElement(path: NodePath<t.JSXElement>, state: PluginPass & { opts: PluginOpts }) {
        const { opts, filename } = state
        const { closingElement, openingElement } = path.node

        // We can immediately bail for elements like Table.Cell or Table:Cell
        if (!t.isJSXIdentifier(openingElement.name)) return

        try {
          const { name } = openingElement.name

          // Bail early if this element isn't one of our precompile targets
          if (!(name in components)) return

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
        } catch (err) {
          if (opts.debug) {
            // eslint-disable-next-line no-console -- plugin logging support
            console.info(
              // @ts-expect-error -- How to check if message is in type object?
              `Skipping precompile for ${openingElement.name.name} in ${filename} for reason: ${err?.message}`,
            )
          }
        }
      },
    },
  }
}

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

/** The actual compiled value of a forwardRef component */
type EvaluatedForwardRef = {
  $$typeof: symbol
  render: <Props, Ref>(props?: Props, ref?: Ref) => React.ReactElement
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
