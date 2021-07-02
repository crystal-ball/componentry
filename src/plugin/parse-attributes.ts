import * as t from '@babel/types'

type Attributes = Array<t.JSXAttribute | t.JSXSpreadAttribute>
type Options = {
  debug: boolean
  filename: string
  componentName: string
  parseProps: Record<string, number>
}

export function parseAttributes(
  attributes: Attributes,
  { debug, filename, componentName, parseProps }: Options,
): {
  parsedAttributes: Record<string, unknown>
  parseSuccess: boolean
  passThroughAttributes: t.JSXAttribute[]
} {
  let parseSuccess = true
  const passThroughAttributes: t.JSXAttribute[] = []
  const parsedAttributes: Record<string, string | number | boolean> = {
    __precompile: true,
  }

  attributes.forEach((attribute) => {
    // We can't tell what is in spread attributes, eg {...rest}, so bail if one is found
    if (t.isJSXSpreadAttribute(attribute)) {
      parseSuccess = false
      return
    }

    const { name, value } = attribute

    if (!t.isJSXIdentifier(name)) {
      log(debug, `Component attribute name is namespaced: ${name}`)
      return
    }

    // If an attribute isn't one of the library props we can just pass it through, this is
    // *required* for some React development plugins that add __source and __self attrs
    if (!parseProps[name.name]) {
      passThroughAttributes.push(attribute)
      return
    }

    let parsedValue: string | number | boolean | null = null

    if (value === null) {
      // 1. If attrValue is null, then attr is a truthy prop
      parsedValue = true
    } else if (t.isStringLiteral(value)) {
      // 2. If attrValue is a string, then it's a string prop
      parsedValue = value.value
    } else if (t.isJSXExpressionContainer(value)) {
      // 3. Otherwise it *should* be an expression container like: someProp={1}
      const { expression } = value

      if (t.isJSXEmptyExpression(expression)) {
        // 3a. An empty expression like someProp={} isn't valid syntax so this shouldn't hit
        log(debug, `Attribute value is an empty expression for ${name} in ${filename}`)
        return
      }

      // Parse expression container contents
      if (t.isBooleanLiteral(expression)) {
        // 3.b Boolean
        parsedValue = expression.value
      } else if (t.isNumericLiteral(expression)) {
        // 3.c Number
        parsedValue = expression.value
      } else if (t.isIdentifier(expression) && name.name === 'as') {
        // ℹ️ Parse attributes with identifiers for value only for "as" because components
        // will pass them through as the component type... for all other attributes we
        // don't know the value of the identifier so we can't precompile it, eg
        // if `top = "xs"` and in component `mt={top}` we need to skip
        parsedValue = expression.name
      } else if (
        t.isIdentifier(expression) ||
        t.isConditionalExpression(expression) ||
        t.isCallExpression(expression)
      ) {
        // ℹ️ Skip components with props that we can't parse including:
        // identifiers, eg: mt={someVariable}
        // conditionals, eg: mt={someVariable ? 80 : 60}
        // call expressions, eg: className={clsx(['call', 'expression'])}
        parseSuccess = false
        log(
          debug,
          `Skipping precompile for ${componentName} with identifier/conditional expression/call expression in ${filename}`,
        )
      } else {
        // 3.d UNHANDLED: array, object
        parseSuccess = false
        log(
          debug,
          `Attribute expression container in ${componentName} in ${filename} could not be parsed: ${value}`,
        )
      }
    } else {
      // 4. Apparently the attribute value could also be a JSXElement or
      //    JSXFragment, but those aren't reproducible without wrapping in a
      //    JSXExpressionContainer, so this case shouldn't happen?
      parseSuccess = false
      log(
        debug,
        `Skipping precompile for non-StringLiter and non-ExpressionContainer attribute for ${componentName} in ${filename}`,
      )
    }

    if (parsedValue !== null) parsedAttributes[name.name] = parsedValue
  })

  return { parsedAttributes, parseSuccess, passThroughAttributes }
}

function log(debug: boolean, message: string) {
  if (debug) {
    console.info(message) // eslint-disable-line no-console
  }
}
