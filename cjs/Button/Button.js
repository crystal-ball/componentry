"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["variant", "active", "color", "disabled", "size"];

/**
 * [Button component 📝](https://componentry.design/components/button)
 * @experimental
 */
var Button = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _ref;

  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Button')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      active = _useTheme$props.active,
      color = _useTheme$props.color,
      disabled = _useTheme$props.disabled,
      size = _useTheme$props.size,
      merged = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded); // If an href or to is passed, this instance should render an anchor tag


  var asAnchor = Boolean(merged.href || merged.to);
  return (0, _elementCreator.element)('Button', (0, _objectSpread2["default"])({
    as: asAnchor ? 'a' : 'button',
    ref: ref,
    type: asAnchor ? undefined : 'button',
    disabled: disabled,
    componentCx: ["button-".concat(variant), (_ref = {}, (0, _defineProperty2["default"])(_ref, "button-".concat(size), size), (0, _defineProperty2["default"])(_ref, "button-color-".concat(color), color), (0, _defineProperty2["default"])(_ref, "active", active), (0, _defineProperty2["default"])(_ref, "disabled", disabled), _ref)]
  }, merged));
});
exports.Button = Button;
Button.displayName = 'Button';