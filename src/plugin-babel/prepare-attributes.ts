import { types as t, template } from '@babel/core'

export function prepareAttributes(
  preCompiledAttributes: React.ReactElement<PreCompiledProps>['props'],
  passThroughAttributes: t.JSXAttribute[],
): t.JSXAttribute[] {
  const {
    className: preCompiledClassName,
    style: preCompiledStyle,
    ...restPreCompiledAttributes
  } = preCompiledAttributes
  const passThroughClassName = extractAttribute(passThroughAttributes, 'className')
  const passThroughStyle = extractAttribute(passThroughAttributes, 'style')

  /** --- TRANSFORM PRECOMPILED --- */

  const preparedAttributes = Object.entries(restPreCompiledAttributes)
    // Filter out empty objects (Componentry will return an undefined 'style' prop when there are no inline styles)
    .filter(([, propValue]) => propValue)
    .map(([propName, propValue]) => createPrimitiveAttribute(propName, propValue))

  /** --- MANAGE CLASSNAMES --- */

  if (preCompiledClassName && passThroughClassName?.value) {
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
        // When library className and passed className are present merge them into a
        // BinaryExpression, eg: 'C9Y-Text-Base ' + 'passed-class-name'
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

  /** --- MANAGE STYLES --- */

  if (preCompiledStyle && passThroughStyle?.value) {
    // Safety-check: Ensure passThrough 'style' is an object literal
    if (
      !t.isJSXExpressionContainer(passThroughStyle.value) ||
      t.isJSXEmptyExpression(passThroughStyle.value.expression) ||
      !t.isObjectExpression(passThroughStyle.value.expression)
    ) {
      throw new Error(`Unsupported node type "${passThroughStyle.type}" for prop "style"`)
    }

    Object.entries(preCompiledStyle).forEach(([propName, propValue]) => {
      // @remarks - unshift includes library generated styles before user props' styles,
      // in cases where there is overlap between a library style and a user style this
      // should result in the user prop style having precedence (future improvement to
      // skip inserting library style if user style exists possible)
      // @ts-expect-error -- Type assertions on style expression lost in .forEach block for some reason??
      passThroughStyle.value.expression.properties.unshift(
        t.objectProperty(
          t.identifier(propName),
          template.expression(JSON.stringify(propValue))(),
        ),
      )
    })

    preparedAttributes.push(passThroughStyle)
  } else if (preCompiledStyle) {
    preparedAttributes.push(createPrimitiveAttribute('style', preCompiledStyle))
  } else if (passThroughStyle) {
    preparedAttributes.push(passThroughStyle)
  }

  /** --- ✓ SUCCESS --- */

  return preparedAttributes.concat(passThroughAttributes)
}

// --------------------------------------------------------
// Helpers

type PreCompiledProps = {
  className?: string
  style?: Record<string, string | number>
}

function createPrimitiveAttribute(name: string, value: any): t.JSXAttribute {
  return t.jsxAttribute(
    t.jSXIdentifier(name),
    t.jsxExpressionContainer(template.expression(JSON.stringify(value))()),
  )
}

function extractAttribute(
  attrs: t.JSXAttribute[],
  propName: string,
): t.JSXAttribute | undefined {
  const extractIdx = attrs.findIndex(({ name }) => name.name === propName)

  // NOTE - this both extracts the requested attribute AND removes it from the passed in array
  const extracted = extractIdx !== -1 ? attrs.splice(extractIdx, 1)[0] : undefined

  return extracted
}
