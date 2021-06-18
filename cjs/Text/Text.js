"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["variant", "align", "bold", "color", "inline", "elementsMap"];
var defaultElementsMap = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'code': 'code',
  'small': 'small'
}; // Module augmentation interface for overriding component props' types

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
var Text = function Text(props) {
  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Text', props.__precompile)), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'body' : _useTheme$props$varia,
      align = _useTheme$props.align,
      bold = _useTheme$props.bold,
      color = _useTheme$props.color,
      inline = _useTheme$props.inline,
      _useTheme$props$eleme = _useTheme$props.elementsMap,
      elementsMap = _useTheme$props$eleme === void 0 ? {} : _useTheme$props$eleme,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded);

  return (0, _elementCreator.element)('Text', (0, _objectSpread2["default"])({
    as: inline ? 'span' : elementsMap[variant] || defaultElementsMap[variant] || 'p',
    componentCx: (0, _defineProperty2["default"])({}, "".concat(variant, "-variant"), !inline),
    fontColor: color,
    fontWeight: bold ? 'bold' : null,
    textAlign: align
  }, rest));
};

exports.Text = Text;
Text.displayName = 'Text';