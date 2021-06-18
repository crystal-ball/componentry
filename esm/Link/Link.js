import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant", "color", "active", "disabled"];
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Link component 📝](https://componentry.design/components/link)
 * @experimental
 */
export var Link = function Link(props) {
  var _ref;

  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('Link')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      color = _useTheme$props.color,
      active = _useTheme$props.active,
      disabled = _useTheme$props.disabled,
      merged = _objectWithoutProperties(_useTheme$props, _excluded); // If an href or to is passed, this instance should render an anchor tag


  var asAnchor = Boolean(merged.href || merged.to);
  return element('Link', _objectSpread({
    as: asAnchor ? 'a' : 'button',
    type: asAnchor ? undefined : 'button',
    disabled: disabled,
    componentCx: ["link-".concat(variant), (_ref = {}, _defineProperty(_ref, "link-color-".concat(color), color), _defineProperty(_ref, "active", active), _defineProperty(_ref, "disabled", disabled), _ref)]
  }, merged));
};
Link.displayName = 'Link';