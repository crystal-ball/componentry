import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant", "active", "color", "disabled", "size"];
import { forwardRef } from 'react';
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Button component 📝](https://componentry.design/components/button)
 * @experimental
 */
export var Button = /*#__PURE__*/forwardRef(function (props, ref) {
  var _ref;

  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('Button')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      active = _useTheme$props.active,
      color = _useTheme$props.color,
      disabled = _useTheme$props.disabled,
      size = _useTheme$props.size,
      merged = _objectWithoutProperties(_useTheme$props, _excluded); // If an href or to is passed, this instance should render an anchor tag


  var asAnchor = Boolean(merged.href || merged.to);
  return element('Button', _objectSpread({
    as: asAnchor ? 'a' : 'button',
    ref: ref,
    type: asAnchor ? undefined : 'button',
    disabled: disabled,
    componentCx: ["button-".concat(variant), (_ref = {}, _defineProperty(_ref, "button-".concat(size), size), _defineProperty(_ref, "button-color-".concat(color), color), _defineProperty(_ref, "active", active), _defineProperty(_ref, "disabled", disabled), _ref)]
  }, merged));
});
Button.displayName = 'Button';