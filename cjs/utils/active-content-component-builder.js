"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeContentBuilder = activeContentBuilder;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Theme = require("../Theme/Theme");

var _activeContainerComponentBuilder = require("./active-container-component-builder");

var _aria = require("./aria");

var _classNames = require("./class-names");

var _elementCreator = require("./element-creator");

var _excluded = ["guid"],
    _excluded2 = ["active", "activeId", "children", "variant"];

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
function activeContentBuilder(displayName, _ref) {
  var aria = _ref.aria,
      _ref$positioned = _ref.positioned,
      positioned = _ref$positioned === void 0 ? false : _ref$positioned;
  var baseCx = (0, _classNames.parseBaseCx)(displayName);

  function ActiveContent(props) {
    var _useContext = (0, _react.useContext)(_activeContainerComponentBuilder.ActiveCtx),
        guid = _useContext.guid,
        activeCtx = (0, _objectWithoutProperties2["default"])(_useContext, _excluded);

    var _useTheme$activeCtx$p = (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)(displayName)), activeCtx), props),
        active = _useTheme$activeCtx$p.active,
        activeId = _useTheme$activeCtx$p.activeId,
        children = _useTheme$activeCtx$p.children,
        _useTheme$activeCtx$p2 = _useTheme$activeCtx$p.variant,
        variant = _useTheme$activeCtx$p2 === void 0 ? "primary" : _useTheme$activeCtx$p2,
        rest = (0, _objectWithoutProperties2["default"])(_useTheme$activeCtx$p, _excluded2); // Create component content (return optionally wraps content in a width busting
    // container)


    var content = (0, _elementCreator.element)(displayName, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _aria.computeARIA)({
      active: active,
      activeId: activeId,
      guid: guid,
      type: 'content',
      aria: aria
    })), {}, {
      componentCx: "".concat(baseCx, "-").concat(variant),
      children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, positioned && /*#__PURE__*/_react["default"].createElement("div", {
        className: "tip-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "tip"
      })), children)
    }, rest)); // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element

    return positioned ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(baseCx, "-container")
    }, content) : content;
  }

  ActiveContent.displayName = displayName;
  return ActiveContent;
}