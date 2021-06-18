"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Close = exports.closeBase = void 0;

var _react = _interopRequireDefault(require("react"));

var _staticComponentBuilder = require("../utils/static-component-builder");

/* eslint-disable @typescript-eslint/no-empty-interface */
var closeBase = {
  'aria-label': 'close',
  'as': 'button',
  'type': 'button',
  'children': /*#__PURE__*/_react["default"].createElement("svg", {
    className: "\uD83C\uDD72-icon icon-close font-variant",
    role: "img"
  }, /*#__PURE__*/_react["default"].createElement("use", {
    href: "#close",
    xlinkHref: "#close"
  }))
};
/**
 * [Close component 📝](https://componentry.design/components/close)
 * @experimental
 */

exports.closeBase = closeBase;
var Close = (0, _staticComponentBuilder.staticComponent)('Close', closeBase);
exports.Close = Close;