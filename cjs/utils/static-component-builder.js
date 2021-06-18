"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticComponent = staticComponent;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("./element-creator");

/**
 * Generates a static component. Used for components that just set a className
 * and HTML attributes
 * @param displayName Component name
 * @param defaultProps Componentry library default prop values
 */
function staticComponent(displayName, defaultProps) {
  function Component(props) {
    return (0, _elementCreator.element)(displayName, (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, defaultProps), (0, _Theme.useTheme)(displayName)), props));
  }

  Component.displayName = displayName;
  return Component;
}