/* eslint-disable max-params */
import template from '@babel/template'
import * as t from '@babel/types'

/**
 * Builds the JSXClosingElement for precompiled component
 */
export function buildClosingElement(componentName: string): t.JSXClosingElement {
  return t.jSXClosingElement(t.jsxIdentifier(componentName))
}

/**
 * Builds the JSXOpeningElement for precompiled component
 */
export function buildOpeningElement(
  componentName: string,
  preCompiledElement: JSX.Element,
  passThroughAttributes: t.JSXAttribute[],
  selfClosing: boolean,
): t.JSXOpeningElement {
  return t.jSXOpeningElement(
    t.jsxIdentifier(componentName),
    Object.entries(preCompiledElement.props)
      // Filter out empty objects (Componentry will return an undefined 'style' prop when there are no inline styles)
      .filter(([, propValue]) => propValue)
      .map(([propName, propValue]) =>
        t.jsxAttribute(
          t.jSXIdentifier(propName),
          typeof propValue === 'string'
            ? t.stringLiteral(propValue)
            : // template.expression provides a convenient way to create an AST for
              // numbers, booleans, objects, and arrays
              t.jsxExpressionContainer(template.expression(JSON.stringify(propValue))()),
        ),
      )
      .concat(passThroughAttributes),
    selfClosing,
  )
}
