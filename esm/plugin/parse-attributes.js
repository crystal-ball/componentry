/* eslint-disable no-console */
export function parseAttributes(attributes, t, _ref) {
  var name = _ref.name;
  var parseSuccess = true;
  var parsedAttributes = {
    __precompile: true
  };
  attributes.forEach(function (attribute) {
    if (t.isJSXSpreadAttribute(attribute)) {
      parseSuccess = false;
      return;
    }

    var attrName = attribute.name,
        attrValue = attribute.value;

    if (!t.isJSXIdentifier(attrName)) {
      console.info('Component attribute name is namespaced: ', attrName);
      return;
    }

    var parsedValue = null;

    if (attrValue === null) {
      // 1. If attrValue is null, then attr is a truthy prop
      parsedValue = true;
    } else if (t.isStringLiteral(attrValue)) {
      // 2. If attrValue is a string, then it's a string prop
      parsedValue = attrValue.value;
    } else if (t.isJSXExpressionContainer(attrValue)) {
      // 3. Otherwise it *should* be an expression container like: someProp={1}
      var expression = attrValue.expression;

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
        console.info('Attribute expression container could not be parsed: ', name, attrValue);
      }
    } else {
      // 4. Apparently the attribute value could also be a JSXElement or
      //    JSXFragment, but those aren't reproducible without wrapping in a
      //    JSXExpressionContainer, so this case shouldn't happen?
      parseSuccess = false;
      console.info('Attribute value is not a string literal or expression container: ', name, attrValue);
    }

    if (parsedValue !== null) parsedAttributes[attrName.name] = parsedValue;
  });
  return {
    parsedAttributes: parsedAttributes,
    parseSuccess: parseSuccess
  };
}