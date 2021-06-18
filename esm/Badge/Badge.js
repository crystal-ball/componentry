import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "variant"];
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Badge component 📝](https://componentry.design/components/badge)
 * @experimental
 */
export var Badge = function Badge(props) {
  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('Badge')), props),
      color = _useTheme$props.color,
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      rest = _objectWithoutProperties(_useTheme$props, _excluded);

  return element('Badge', _objectSpread({
    componentCx: ["badge-".concat(variant), _defineProperty({}, "badge-color-".concat(color), color)]
  }, rest));
};
Badge.displayName = 'Badge';