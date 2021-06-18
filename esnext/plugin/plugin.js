import { Flex } from '../Flex/Flex';
import { Block } from '../Block/Block';
import { Text } from '../Text/Text';
const components = {
  Block,
  Flex,
  Text
};

const componentryPlugin = ({
  types: t
}) => {
  return {
    visitor: {
      JSXElement(path, state) {
        const {
          closingElement,
          openingElement
        } = path.node;
        const {
          attributes,
          name: nameNode
        } = openingElement; // nameNode can be one of:
        // 1. JSXIdentifier (eg List)
        // 2. JSXMemberExpression (eg List.Item)
        // 3. JSXNamespacedName (eg List:Item)
        // We are only transforming usage like: <Flex>

        if (!t.isJSXIdentifier(nameNode)) return; // Bail early if this element isn't one of our precompile targets

        if (!components[nameNode.name]) return; // ✓ Componentry compile component

        const componentName = nameNode.name;
        const selfClosing = Boolean(closingElement); // Bail early if there are spreadAttributes, eg <Flex {...rest}>

        let hasSpreadAttribute = false;
        const props = {
          __precompile: true
        };
        attributes.forEach(attribute => {
          if (t.isJSXSpreadAttribute(attribute)) {
            hasSpreadAttribute = true;
            return;
          }

          const {
            name: key,
            value
          } = attribute;

          if (!t.isJSXIdentifier(key)) {
            console.info('Component attribute name is namespaced: ', key);
            return;
          }

          if (!t.isStringLiteral(value)) {
            console.info('Attribute value is not string literal: ', componentName, value);
            return;
          }

          props[key.name] = value.value;
        }); // Bail if the component has spread params, we can't convert them to props for
        // component call yet.

        if (hasSpreadAttribute) return; // Computed props for this instance

        const computed = components[componentName](props);
        path.get('openingElement').replaceWith(t.jSXOpeningElement(t.jsxIdentifier(computed.type), Object.keys(computed.props).map(prop => {
          const propValue = computed.props[prop];

          if (typeof propValue === 'object' && propValue !== null && Object.keys(propValue).length === 0) {
            return null;
          }

          return t.jSXAttribute(t.jSXIdentifier(prop), typeof propValue === 'string' ? t.stringLiteral(propValue) : t.jsxExpressionContainer(t.objectExpression([])));
        }).filter(Boolean), selfClosing));

        if (!selfClosing) {
          path.get('closingElement').replaceWith(t.jSXClosingElement(t.jsxIdentifier('div')));
        }
      }

    }
  };
};

export default componentryPlugin; // Polishing:
// 1. Document the flow: Precompile -> Components -> element creator -> replaceWith
// 2. Extract utility for: Converting node attributes to a props object
// 3. Extract utility for: Converting create element return to a JSX element
// 4. Use an explicit opt in to conversion to skip rest attributes aaaaand....
// 5. Test usage like <Flex as={Wrapped} passThroughProps="special">
// 6. Include logging with filename and why skipping precompile when doing it for debugging
// 7. Test that spread attributes get skipped

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