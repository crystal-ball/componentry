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
      rest = _objectWithoutProperties(_useTheme$props, _excluded);

  return element('Flex', _objectSpread({
    componentCx: (_componentCx = {
      'flex': !inline,
      'inline-flex': inline
    }, _defineProperty(_componentCx, "flex-".concat(direction), direction), _defineProperty(_componentCx, "flex-".concat(wrap), wrap), _componentCx),
    alignItems: align,
    justifyContent: justify
  }, rest));
};
Flex.displayName = 'Flex';