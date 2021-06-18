"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Close = require("../Close/Close");

var _Theme = require("../Theme/Theme");

var _hooks = require("../hooks");

var _elementCreator = require("../utils/element-creator");

var _staticComponentBuilder = require("../utils/static-component-builder");

var _excluded = ["children", "active", "ariaTitle", "color", "deactivate", "dismissible", "variant"];

/**
 * [Alert component 📝](https://componentry.design/components/alert)
 * @experimental
 */
var Alert = function Alert(props) {
  var _ref;

  var _useTheme$useActive$p = (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Alert')), (0, _hooks.useActive)()), props),
      children = _useTheme$useActive$p.children,
      propsActive = _useTheme$useActive$p.active,
      ariaTitle = _useTheme$useActive$p.ariaTitle,
      color = _useTheme$useActive$p.color,
      deactivate = _useTheme$useActive$p.deactivate,
      dismissible = _useTheme$useActive$p.dismissible,
      _useTheme$useActive$p2 = _useTheme$useActive$p.variant,
      variant = _useTheme$useActive$p2 === void 0 ? 'primary' : _useTheme$useActive$p2,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$useActive$p, _excluded);

  var _useVisible = (0, _hooks.useVisible)(propsActive),
      active = _useVisible.active,
      visible = _useVisible.visible;

  return (0, _elementCreator.element)('Alert', (0, _objectSpread2["default"])({
    'role': 'alert',
    'componentCx': ["alert-".concat(variant), (_ref = {}, (0, _defineProperty2["default"])(_ref, "alert-color-".concat(color), color), (0, _defineProperty2["default"])(_ref, "fade", dismissible), (0, _defineProperty2["default"])(_ref, "visible", visible), _ref)],
    'aria-hidden': dismissible ? String(!active) : 'false',
    'children': /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "sr-only"
    }, ariaTitle || "".concat(color, " alert")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "alert-content"
    }, children), dismissible && /*#__PURE__*/_react["default"].createElement(Alert.Close, {
      className: "font-color-".concat(color),
      onClick: deactivate
    }))
  }, rest));
};

exports.Alert = Alert;
Alert.displayName = 'Alert';
Alert.Close = (0, _staticComponentBuilder.staticComponent)('AlertClose', _Close.closeBase);