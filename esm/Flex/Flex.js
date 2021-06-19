import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["align", "direction", "inline", "justify", "wrap"];
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export var Flex = function Flex(props) {
  var _componentCx;

  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('Flex', props.__precompile)), props),
      align = _useTheme$props.align,
      direction = _useTheme$props.direction,
      inline = _useTheme$props.inline,
      justify = _useTheme$props.justify,
      wrap = _useTheme$props.wrap,
      rest = _objectWithoutProperties(_useTheme$props, _excluded); // Tailwind uses a flex-col class but direction="col" is super wonky
  // => so props use "column" and we replace with "col"


  var computedDirection = direction === null || direction === void 0 ? void 0 : direction.replace('column', 'col');
  return element('Flex', _objectSpread({
    componentCx: (_componentCx = {
      'flex': !inline,
      'inline-flex': inline
    }, _defineProperty(_componentCx, "flex-".concat(computedDirection), computedDirection), _defineProperty(_componentCx, "flex-".concat(wrap), wrap), _componentCx),
    alignItems: align,
    justifyContent: justify
  }, rest));
};
Flex.displayName = 'Flex';