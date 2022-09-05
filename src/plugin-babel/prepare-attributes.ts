import { types as t, template } from '@babel/core'

export function prepareAttributes(
  preCompiledAttributes: { [propName: string]: string | number | boolean | undefined },
  passThroughAttributes: t.JSXAttribute[],
): t.JSXAttribute[] {
  const { className: preCompiledClassName, ...classNameLessPreCompiledAttributes } =
    preCompiledAttributes
  const [classNameLessPassThroughAttributes, passThroughClassName] = extractAttribute(
    passThroughAttributes,
    'className',
  )

  /** --- TRANSFORM PRECOMPILED --- */

  const preparedAttributes = Object.entries(classNameLessPreCompiledAttributes)
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

  /** --- MANAGE CLASSNAMES --- */

  if (preCompiledClassName && passThroughClassName?.value) {
    // When library className and passed className are present merge them into a
    // BinaryExpression, eg: 'C9Y-Text-Base ' + 'passed-class-name'

    // Safety-check: Bail on any invalid JSX prop values
    if (
      t.isJSXElement(passThroughClassName.value) ||
      t.isJSXFragment(passThroughClassName.value)
    ) {
      throw new Error(
        `Unsupported node type "${passThroughClassName.type}" for prop "className"`,
      )
    }

    const passThroughValue = t.isStringLiteral(passThroughClassName.value)
      ? passThroughClassName.value
      : passThroughClassName.value.expression

    // Safety-check: Bail on any invalid empty expressions
    if (t.isJSXEmptyExpression(passThroughValue)) {
      throw new Error(`Unsupported node type "EmptyExpression" for prop "className"`)
    }

    preparedAttributes.push(
      t.jsxAttribute(
        t.jSXIdentifier('className'),
        t.jsxExpressionContainer(
          t.binaryExpression(
            '+',
            t.stringLiteral(`${preCompiledClassName} `),
            passThroughValue,
          ),
        ),
      ),
    )
  } else if (preCompiledClassName) {
    // Safety-check: Ensure library className is a string
    if (typeof preCompiledClassName !== 'string') {
      throw new Error(
        `Unexpected precompiled className of type ${typeof preCompiledClassName}`,
      )
    }
    preparedAttributes.push(
      t.jsxAttribute(t.jSXIdentifier('className'), t.stringLiteral(preCompiledClassName)),
    )
  } else if (passThroughClassName) {
    preparedAttributes.push(passThroughClassName)
  }

  /** --- ✓ SUCCESS --- */

  return preparedAttributes.concat(classNameLessPassThroughAttributes)
}

// --------------------------------------------------------
// Helpers

function extractAttribute(
  attrs: t.JSXAttribute[],
  propName: string,
): [attrsList: t.JSXAttribute[], extracted?: t.JSXAttribute] {
  const extractIdx = attrs.findIndex(({ name }) => name.name === propName)

  // NOTE - this both extracts the requested attribute AND removes it from the passed in array
  const extracted = extractIdx !== -1 ? attrs.splice(extractIdx, 1)[0] : undefined

  return [attrs, extracted]
}
