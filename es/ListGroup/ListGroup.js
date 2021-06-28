import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { Children } from 'react';
import { BaseButton } from '../Button/Button';
import elementFactory from '../component-factories/element';
/**
 * 🤔 There are different wrappers for clickable vs non-clickable list groups. (this
 * seems less than ideal Bootstrap, can we always do a div?)
 */

var ListGroup = elementFactory('ListGroup', function (props) {
  var child = Children.toArray(props.children)[0]; // We have to be careful of children like text nodes with this check

  var childProps = child && child.props ? child.props : {};
  return _objectSpread({
    className: 'list-group',
    tag: childProps.href || childProps.onClick ? 'div' : 'ul'
  }, props);
});
var ListGroupItem = elementFactory('ListGroupItem', function (_ref) {
  var active = _ref.active,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ["active", "color"]);

  var href = rest.href,
      onClick = rest.onClick;
  return _objectSpread({
    className: _defineProperty({
      'list-group-item': true,
      active: active,
      'list-group-item-action': href || onClick
    }, "list-group-item-".concat(color), color),

    /* eslint-disable no-nested-ternary */
    tag: href || onClick ? href ? 'a' : BaseButton : 'li'
  }, rest);
}); // $FlowFixMe

ListGroup.Item = ListGroupItem;
export default ListGroup;