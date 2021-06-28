import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import elementFactory from '../component-factories/element';

/**
 * ⚠️ Requires SVGs are inlined into document somewhere
 */
export default elementFactory('Icon', function (_ref) {
  var _className;

  var id = _ref.id,
      _ref$font = _ref.font,
      font = _ref$font === void 0 ? true : _ref$font,
      props = _objectWithoutProperties(_ref, ["id", "font"]);

  return _objectSpread({
    role: 'img',
    tag: 'svg',
    className: (_className = {
      icon: true
    }, _defineProperty(_className, id, true), _defineProperty(_className, "font", font), _className),
    children: /*#__PURE__*/React.createElement("use", {
      href: "#".concat(id),
      xlinkHref: "#".concat(id)
    })
  }, props);
});