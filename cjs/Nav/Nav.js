"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _Theme = require("../Theme/Theme");

var _classNames = require("../utils/class-names");

var _elementCreator = require("../utils/element-creator");

var _excluded = ["variant"];

/**
 * [Nav component 📝](https://componentry.design/components/nav)
 * @experimental
 */
var Nav = function Nav(props) {
  return (0, _elementCreator.element)('Nav', (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    as: 'nav',
    componentCx: (0, _classNames.navClasses)('nav', props),
    role: 'navigation'
  }, (0, _Theme.useTheme)('Nav')), props));
};

exports.Nav = Nav;
Nav.displayName = 'Nav';

Nav.Item = function NavItem(props) {
  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('NavItem')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      merged = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded);

  return (0, _elementCreator.element)('NavItem', (0, _objectSpread2["default"])({
    as: 'a',
    componentCx: "nav-item-".concat(variant)
  }, merged));
};

Nav.Item.displayName = 'NavItem';