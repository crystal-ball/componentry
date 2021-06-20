/* eslint-disable no-console */
import { Flex } from '../Flex/Flex';
import { Block } from '../Block/Block';
import { Text } from '../Text/Text';
import { precompileProps, utilityProps } from '../utils/componentry';
import { parseAttributes } from './parse-attributes';
import { buildClosingElement, buildOpeningElement } from './build-elements';
const components = {
  Block,
  Flex,
  Text
}; // These are the props that should be parsed to compute the component value

const parseProps = { ...utilityProps,
  ...precompileProps
};
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

/**
 * Componentry precompile Babel plugin
 */
const componentryPlugin = ({
  types: t
}) => {
  return {
    name: 'componentry-plugin',
    visitor: {
      JSXElement(path, state) {
        if (state.opts.debug) console.info(`--- Visiting: ${state.filename}`);
        const {
          closingElement,
          openingElement
        } = path.node;
        const {
          attributes
        } = openingElement; // We are not transforming MemberExpression or Namespaced JSXElments

        if (!t.isJSXIdentifier(openingElement.name)) return; // Bail early if this element isn't one of our precompile targets

        const {
          name
        } = openingElement.name;
        if (!(name in components)) return; // ✓ This is a Componentry precompile component, handle transforming

        const {
          parsedAttributes,
          parseSuccess,
          passThroughAttributes
        } = parseAttributes(attributes, t, {
          componentName: name,
          filename: state.filename,
          parseProps
        }); // If we weren't able to successfully parse all of the node attributes bail early
        // TODO: Add debug and reporting for this

        if (!parseSuccess) return; // Computed props for this instance
        // @ts-ignore DEBT

        const precompiledComponent = components[name](parsedAttributes);
        path.get('openingElement').replaceWith(buildOpeningElement(precompiledComponent, {
          selfClosing: openingElement.selfClosing,
          passThroughAttributes
        }, t));

        if (closingElement) {
          path.get('closingElement').replaceWith(buildClosingElement(precompiledComponent.type, t));
        }
      }

    }
  };
};

export default componentryPlugin; // Polishing:
// - Pass through props that aren't library props, eg __self and __source
//   Use a list of all utility props + precompile component props, skip parsing attr if not in list
// - Add debug option for including `data-component="NAME"`
// 1. Document the flow: Precompile -> Components -> element creator -> replaceWith
// 2. Extract utility for: Converting node attributes to a props object
// 3. Extract utility for: Converting create element return to a JSX element
// 4. Use an explicit opt in to conversion to skip rest attributes aaaaand....
// 5. Test usage like <Flex as={Wrapped} passThroughProps="special">
// 6. Include logging with filename and why skipping precompile when doing it for debugging
// 7. Test that spread attributes get skipped
// 8. Pass through refs
// 9. Pass through fns, eg onMouseEnter
// 10. Handle strings, numbers, booleans, arrays, objects for attribute values
// - Only try to parse library props, passthrough others