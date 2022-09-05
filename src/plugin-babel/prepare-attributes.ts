import { types as t, template } from '@babel/core'

export function prepareAttributes(
  preCompiledElement: JSX.Element,
  passThroughAttributes: t.JSXAttribute[],
): t.JSXAttribute[] {
  return (
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
      .concat(passThroughAttributes)
  )
}
