import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Fragment } from 'react';
import Close from '../Close/Close';
import withActive from '../withActive/withActive';
import elementFactory from '../component-factories/element';

/**
 * Alerts provide contextual feedback to users. Alerts are available in the info
 * theme colors success, info, warning and danger. They are not available in primary
 * or secondary theme colors because they are intended to be used for alerting with
 * context. For non alert information blocks a card with theme color primary or
 * secondary can be used.
 */
var Alert = elementFactory('Alert', function (_ref) {
  var _className;

  var ariaTitle = _ref.ariaTitle,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active,
      children = _ref.children,
      color = _ref.color,
      _ref$dismissible = _ref.dismissible,
      dismissible = _ref$dismissible === void 0 ? false : _ref$dismissible,
      deactivate = _ref.deactivate,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      activate = _ref.activate,
      rest = _objectWithoutProperties(_ref, ["ariaTitle", "active", "children", "color", "dismissible", "deactivate", "visible", "activate"]);

  return _objectSpread({
    role: 'alert',
    className: (_className = {
      alert: true,
      fade: true
    }, _defineProperty(_className, "alert-".concat(color), color), _defineProperty(_className, "show", visible), _className),
    // hidden state is updated after active opacity transition
    'aria-hidden': active ? 'false' : 'true',
    children: /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "sr-only"
    }, ariaTitle || "".concat(color, " alert")), /*#__PURE__*/React.createElement("div", {
      className: "alert-content"
    }, children), dismissible && /*#__PURE__*/React.createElement(Close, {
      onClick: deactivate,
      className: "text-".concat(color)
    }))
  }, rest);
});
export default withActive({
  defaultActive: true,
  transitionState: true
})(Alert);