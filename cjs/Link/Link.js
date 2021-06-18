"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["variant", "color", "active", "disabled"];

/**
 * [Link component 📝](https://componentry.design/components/link)
 * @experimental
 */
var Link = function Link(props) {
  var _ref;

  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Link')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      color = _useTheme$props.color,
      active = _useTheme$props.active,
      disabled = _useTheme$props.disabled,
      merged = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded); // If an href or to is passed, this instance should render an anchor tag


  var asAnchor = Boolean(merged.href || merged.to);
  return (0, _elementCreator.element)('Link', (0, _objectSpread2["default"])({
    as: asAnchor ? 'a' : 'button',
    type: asAnchor ? undefined : 'button',
    disabled: disabled,
    componentCx: ["link-".concat(variant), (_ref = {}, (0, _defineProperty2["default"])(_ref, "link-color-".concat(color), color), (0, _defineProperty2["default"])(_ref, "active", active), (0, _defineProperty2["default"])(_ref, "disabled", disabled), _ref)]
  }, merged));
};

exports.Link = Link;
Link.displayName = 'Link';