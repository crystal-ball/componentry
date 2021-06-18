import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["variant"];

/* eslint-disable @typescript-eslint/no-empty-interface */
import { useTheme } from '../Theme/Theme';
import { navClasses } from '../utils/class-names';
import { element } from '../utils/element-creator';

/**
 * [Nav component 📝](https://componentry.design/components/nav)
 * @experimental
 */
export var Nav = function Nav(props) {
  return element('Nav', _objectSpread(_objectSpread({
    as: 'nav',
    componentCx: navClasses('nav', props),
    role: 'navigation'
  }, useTheme('Nav')), props));
};
Nav.displayName = 'Nav';

Nav.Item = function NavItem(props) {
  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('NavItem')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'primary' : _useTheme$props$varia,
      merged = _objectWithoutProperties(_useTheme$props, _excluded);

  return element('NavItem', _objectSpread({
    as: 'a',
    componentCx: "nav-item-".concat(variant)
  }, merged));
};

Nav.Item.displayName = 'NavItem';