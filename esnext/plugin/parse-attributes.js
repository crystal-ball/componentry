/* eslint-disable no-console */
export function parseAttributes(attributes, t, {
  filename,
  componentName,
  parseProps
}) {
  let parseSuccess = true;
  const passThroughAttributes = [];
  const parsedAttributes = {
    __precompile: true
  };
  attributes.forEach(attribute => {
    // We can't tell what is in spread attributes, eg {...rest}, so bail if one is found
    if (t.isJSXSpreadAttribute(attribute)) {
      parseSuccess = false;
      return;
    }

    const {
      name,
      value
    } = attribute;

    if (!t.isJSXIdentifier(name)) {
      console.info('Component attribute name is namespaced: ', name);
      return;
    } // If an attribute isn't one of the library props we can just pass it through, this is
    // *required* for some React development plugins that add __source and __self attrs


    if (!parseProps[name.name]) {
      passThroughAttributes.push(attribute);
      return;
    }

    let parsedValue = null;

    if (value === null) {
      // 1. If attrValue is null, then attr is a truthy prop
      parsedValue = true;
    } else if (t.isStringLiteral(value)) {
      // 2. If attrValue is a string, then it's a string prop
      parsedValue = value.value;
    } else if (t.isJSXExpressionContainer(value)) {
      // 3. Otherwise it *should* be an expression container like: someProp={1}
      const {
        expression
      } = value;

      if (t.isJSXEmptyExpression(expression)) {
        // 3a. An empty expression like someProp={} isn't valid syntax so this shouldn't hit
        console.info('Attribute value is an empty expression: ', name, expression);
        return;
      } // Parse expression container contents


      if (t.isBooleanLiteral(expression)) {
        // 3.b Boolean
        parsedValue = expression.value;
      } else if (t.isNumericLiteral(expression)) {
        // 3.c Number
        parsedValue = expression.value;
      } else {
        // 3.d UNHANDLED: array, object, function
        parseSuccess = false;
        console.info('Attribute expression container could not be parsed: ', filename, componentName, value);
      }
    } else {
      // 4. Apparently the attribute value could also be a JSXElement or
      //    JSXFragment, but those aren't reproducible without wrapping in a
      //    JSXExpressionContainer, so this case shouldn't happen?
      parseSuccess = false;
      console.info('Attribute value is not a string literal or expression container: ', name, value);
    }

    if (parsedValue !== null) parsedAttributes[name.name] = parsedValue;
  });
  return {
    parsedAttributes,
    parseSuccess,
    passThroughAttributes
  };
}