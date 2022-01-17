/* eslint-disable no-console */
import { PluginObj, types } from '@babel/core'

import { Flex } from '../components/Flex/Flex'
import { Block } from '../components/Block/Block'
import { Text } from '../components/Text/Text'
import { precompileProps, utilityProps } from '../utils/utility-classes'

import { parseAttributes } from './parse-attributes'
import { buildClosingElement, buildOpeningElement } from './build-elements'

const components = { Block, Flex, Text }
// These are the props that should be parsed to compute the component value
const parseProps = { as: 1, className: 1, ...utilityProps, ...precompileProps }

/**
 * # Types Notes
 *
 * JSXOpeningElement can be a:
 * 1. JSXIdentifier (eg List)
 * 2. JSXMemberExpression (eg List.Item)
 * 3. JSXNamespacedName (eg List:Item)
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

type PluginOpts = { debug?: boolean; dataFlag?: boolean }
type Types = typeof types
type VisitorState = { opts: PluginOpts; filename: string }
type BabelObj = { types: Types }

/**
 * Componentry precompile Babel plugin
 */
const componentryPlugin = ({ types: t }: BabelObj): PluginObj<VisitorState> => {
  return {
    name: 'componentry-plugin',
    visitor: {
      JSXElement(path, state) {
        const { opts, filename } = state
        const { closingElement, openingElement } = path.node
        const { attributes } = openingElement

        if (opts.debug) console.info(`--- Visiting: ${filename}`)

        // We are not transforming MemberExpression or Namespaced JSXElements
        if (!t.isJSXIdentifier(openingElement.name)) return

        // Bail early if this element isn't one of our precompile targets
        const { name } = openingElement.name
        if (!(name in components)) return

        // --- ✅ This is a Componentry precompile component, handle transforming

        // Parse the opening element's attributes to determine the prop values
        const { parsedAttributes, parseSuccess, passThroughAttributes } = parseAttributes(
          attributes,
          {
            debug: opts.debug ?? false,
            componentName: name,
            filename,
            parseProps,
          },
        )

        // If the dataFlag option is truthy add a data attribute signifying the element
        // has been pre-compiled
        if (opts.dataFlag) {
          parsedAttributes['data-component'] = name
        }

        // If we weren't able to successfully parse all of the node attributes bail early
        // TODO: Add debug and reporting for this
        if (!parseSuccess) return

        // @ts-ignore DEBT
        // Call the component with the parsed attributes to create the pre-compiled result
        const preCompiledResult = components[name](parsedAttributes)

        // 🎉 Replace the elements opening and closing elements with our pre-compiled result
        path.get('openingElement').replaceWith(
          buildOpeningElement(preCompiledResult, passThroughAttributes, {
            selfClosing: openingElement.selfClosing,
          }),
        )

        if (closingElement) {
          path
            .get('closingElement')
            .replaceWith(buildClosingElement(preCompiledResult.type))
        }
      },
    },
  }
}

export default componentryPlugin

// Polishing:
// [] Pass through refs
