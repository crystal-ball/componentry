"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["flush"],
    _excluded2 = ["active", "color", "disabled"];

/**
 * [List component 📝](https://componentry.design/components/list)
 * @experimental
 */
var List = function List(props) {
  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('List')), props),
      flush = _useTheme$props.flush,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded);

  return (0, _elementCreator.element)('List', (0, _objectSpread2["default"])({
    componentCx: {
      'list-flush': flush
    }
  }, rest));
};

exports.List = List;
List.displayName = 'List';
/**
 * [List item component 📝](https://componentry.design/components/list)
 */

List.Item = function ListItem(props) {
  var _componentCx;

  var _useTheme$props2 = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('ListItem')), props),
      active = _useTheme$props2.active,
      color = _useTheme$props2.color,
      disabled = _useTheme$props2.disabled,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props2, _excluded2);

  return (0, _elementCreator.element)('ListItem', (0, _objectSpread2["default"])({
    as: rest.href || rest.to ? 'a' : 'button',
    componentCx: (_componentCx = {}, (0, _defineProperty2["default"])(_componentCx, "list-item-".concat(color), color), (0, _defineProperty2["default"])(_componentCx, "active", active), (0, _defineProperty2["default"])(_componentCx, "disabled", disabled), _componentCx),
    disabled: disabled
  }, rest));
};

List.Item.displayName = 'ListItem';