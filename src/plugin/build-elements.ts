import template from '@babel/template'
import * as BabelTypes from '@babel/types'

export function buildClosingElement(
  identifier: string,
  t: typeof BabelTypes,
): BabelTypes.JSXClosingElement {
  return t.jSXClosingElement(t.jsxIdentifier(identifier))
}

export function buildOpeningElement(
  { props, type }: JSX.Element,
  {
    selfClosing,
    passThroughAttributes,
  }: { selfClosing: boolean; passThroughAttributes: BabelTypes.JSXAttribute[] },
  t: typeof BabelTypes,
): BabelTypes.JSXOpeningElement {
  return t.jSXOpeningElement(
    t.jsxIdentifier(type),
    // @ts-ignore DEBT
    Object.keys(props)
      .map((propName) => {
        const propValue = props[propName]

        // Filter out empty objects (Componentry will return an empty style object for every element)
        if (isEmptyObject(propValue)) return null

        return t.jsxAttribute(
          t.jSXIdentifier(propName),
          typeof propValue === 'string'
            ? t.stringLiteral(propValue)
            : // template.expression provides a convenient way to create an AST for
              // numbers, booleans, objects, and arrays
              t.jsxExpressionContainer(template.expression(JSON.stringify(propValue))()),
        )
      })
      .filter(Boolean)
      .concat(passThroughAttributes),
    selfClosing,
  )
}

function isEmptyObject(maybe: unknown): boolean {
  return typeof maybe === 'object' && maybe !== null && Object.keys(maybe).length === 0
}
