"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["variant", "id"];

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
var Icon = function Icon(props) {
  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Icon')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'font' : _useTheme$props$varia,
      id = _useTheme$props.id,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded);

  return (0, _elementCreator.element)('Icon', (0, _objectSpread2["default"])({
    as: 'svg',
    role: 'img',
    componentCx: ["".concat(variant, "-variant"), "icon-".concat(id)],
    children: /*#__PURE__*/_react["default"].createElement("use", {
      href: "#".concat(id),
      xlinkHref: "#".concat(id)
    })
  }, rest));
};

exports.Icon = Icon;
Icon.displayName = 'Icon';