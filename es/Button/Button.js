import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import elementFactory from '../component-factories/element';

/**
 * The library makes use of Buttons that should not have the base `.btn` class. It's
 * more explicit to specify this as a component type (and easier to debug/reason
 * about).
 * @param {boolean} decorated
 */
var makeButton = function makeButton(decorated) {
  return elementFactory(decorated ? 'Button' : 'BaseButton', function (_ref) {
    var _className;

    var color = _ref.color,
        link = _ref.link,
        outline = _ref.outline,
        size = _ref.size,
        props = _objectWithoutProperties(_ref, ["color", "link", "outline", "size"]);

    return _objectSpread({
      tag: 'button',
      type: 'button',
      className: (_className = {
        btn: decorated,
        'btn-anchor': link
      }, _defineProperty(_className, "btn-".concat(color), color && !link && !outline), _defineProperty(_className, "btn-outline-".concat(color), outline), _defineProperty(_className, 'btn-sm', size === 'small'), _defineProperty(_className, 'btn-lg', size === 'large'), _className)
    }, props);
  });
};

var Button = makeButton(true);
var BaseButton = makeButton(false);
export { BaseButton };
export default Button;