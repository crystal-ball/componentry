import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["flush"],
    _excluded2 = ["active", "color", "disabled"];
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [List component 📝](https://componentry.design/components/list)
 * @experimental
 */
export var List = function List(props) {
  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('List')), props),
      flush = _useTheme$props.flush,
      rest = _objectWithoutProperties(_useTheme$props, _excluded);

  return element('List', _objectSpread({
    componentCx: {
      'list-flush': flush
    }
  }, rest));
};
List.displayName = 'List';
/**
 * [List item component 📝](https://componentry.design/components/list)
 */

List.Item = function ListItem(props) {
  var _componentCx;

  var _useTheme$props2 = _objectSpread(_objectSpread({}, useTheme('ListItem')), props),
      active = _useTheme$props2.active,
      color = _useTheme$props2.color,
      disabled = _useTheme$props2.disabled,
      rest = _objectWithoutProperties(_useTheme$props2, _excluded2);

  return element('ListItem', _objectSpread({
    as: rest.href || rest.to ? 'a' : 'button',
    componentCx: (_componentCx = {}, _defineProperty(_componentCx, "list-item-".concat(color), color), _defineProperty(_componentCx, "active", active), _defineProperty(_componentCx, "disabled", disabled), _componentCx),
    disabled: disabled
  }, rest));
};

List.Item.displayName = 'ListItem';