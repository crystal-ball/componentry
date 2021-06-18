"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["inline"];

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
var Block = function Block(props) {
  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Block', props.__precompile)), props),
      inline = _useTheme$props.inline,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded);

  return (0, _elementCreator.element)('Block', (0, _objectSpread2["default"])({
    componentCx: {
      'block': !inline,
      'inline-block': inline
    }
  }, rest));
};

exports.Block = Block;
Block.displayName = 'Block';