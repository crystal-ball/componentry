"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["align", "direction", "inline", "justify", "wrap"];

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
var Flex = function Flex(props) {
  var _componentCx;

  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Flex', props.__precompile)), props),
      align = _useTheme$props.align,
      direction = _useTheme$props.direction,
      inline = _useTheme$props.inline,
      justify = _useTheme$props.justify,
      wrap = _useTheme$props.wrap,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded);

  return (0, _elementCreator.element)('Flex', (0, _objectSpread2["default"])({
    componentCx: (_componentCx = {
      'flex': !inline,
      'inline-flex': inline
    }, (0, _defineProperty2["default"])(_componentCx, "flex-".concat(direction), direction), (0, _defineProperty2["default"])(_componentCx, "flex-".concat(wrap), wrap), _componentCx),
    alignItems: align,
    justifyContent: justify
  }, rest));
};

exports.Flex = Flex;
Flex.displayName = 'Flex';