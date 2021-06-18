"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["color", "variant"];

/**
 * [Badge component 📝](https://componentry.design/components/badge)
 * @experimental
 */
var Badge = function Badge(props) {
  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Badge')), props),
      color = _useTheme$props.color,
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded);

  return (0, _elementCreator.element)('Badge', (0, _objectSpread2["default"])({
    componentCx: ["badge-".concat(variant), (0, _defineProperty2["default"])({}, "badge-color-".concat(color), color)]
  }, rest));
};

exports.Badge = Badge;
Badge.displayName = 'Badge';