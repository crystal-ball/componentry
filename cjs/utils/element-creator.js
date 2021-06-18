"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.element = element;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _clsx = _interopRequireDefault(require("clsx"));

var _classNames = require("./class-names");

var _componentry2 = require("./componentry");

var _excluded = ["as", "className", "componentCx", "style", "themeCx"];

// 📝 Type docs
// ElementOptions<TProps> is needed for componentCx and themeCx which we don't
//   want to define in the component props
// interface ComponentProps is needed to type the shared props as, className,
//   and style

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and all classes and styles
 * are merged properly.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site)
 */
function element(displayName, _ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      componentCx = _ref.componentCx,
      style = _ref.style,
      themeCx = _ref.themeCx,
      merged = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames

  /* @ts-ignore BaseProps isn't fully typed out to match componentry() yet */
  var _componentry = (0, _componentry2.componentry)(merged),
      utilityCx = _componentry.utilityCx,
      props = _componentry.props,
      styles = _componentry.styles;

  return /*#__PURE__*/(0, _react.createElement)(as, (0, _objectSpread2["default"])({
    style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, styles), style),
    className: (0, _clsx["default"])("\uD83C\uDD72-".concat((0, _classNames.parseBaseCx)(displayName)), // Component base className, eg '🅲-btn'
    themeCx, // User defined default className from theme context
    componentCx, // Library defined component specific classNames, eg 'btn-sm'
    className, // User supplied className
    utilityCx // Utility classNames, eg 'mt-xl'
    )
  }, props));
}