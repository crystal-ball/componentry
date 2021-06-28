import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { BaseButton } from '../Button/Button';
import elementFactory from '../component-factories/element';

var makeNav = function makeNav(tabNav) {
  return elementFactory(tabNav ? 'TabNav' : 'Nav', function (_ref) {
    var fill = _ref.fill,
        justify = _ref.justify,
        pills = _ref.pills,
        vertical = _ref.vertical,
        props = _objectWithoutProperties(_ref, ["fill", "justify", "pills", "vertical"]);

    return _objectSpread({
      tag: 'nav',
      role: tabNav ? 'tablist' : undefined,
      className: {
        nav: true,
        'nav-tabs': tabNav,
        'flex-column': vertical,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-justified': justify
      }
    }, props);
  });
};

var Nav = makeNav(false);
var TabNav = makeNav(true);
var NavItem = elementFactory('NavItem', function (_ref2) {
  var active = _ref2.active,
      rest = _objectWithoutProperties(_ref2, ["active"]);

  var href = rest.href,
      onClick = rest.onClick;
  return _objectSpread({
    className: {
      'nav-item': true,
      active: active,
      'nav-link': href || onClick
    },

    /* eslint-disable no-nested-ternary */
    tag: href || onClick ? href ? 'a' : BaseButton : 'li'
  }, rest);
});
export { TabNav }; // $FlowFixMe

Nav.Item = NavItem;
export default Nav;