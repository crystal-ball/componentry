import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "active", "ariaTitle", "color", "deactivate", "dismissible", "variant"];

/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { closeBase } from '../Close/Close';
import { useTheme } from '../Theme/Theme';
import { useActive, useVisible } from '../hooks';
import { element } from '../utils/element-creator';
import { staticComponent } from '../utils/static-component-builder';

/**
 * [Alert component 📝](https://componentry.design/components/alert)
 * @experimental
 */
export var Alert = function Alert(props) {
  var _ref;

  var _useTheme$useActive$p = _objectSpread(_objectSpread(_objectSpread({}, useTheme('Alert')), useActive()), props),
      children = _useTheme$useActive$p.children,
      propsActive = _useTheme$useActive$p.active,
      ariaTitle = _useTheme$useActive$p.ariaTitle,
      color = _useTheme$useActive$p.color,
      deactivate = _useTheme$useActive$p.deactivate,
      dismissible = _useTheme$useActive$p.dismissible,
      _useTheme$useActive$p2 = _useTheme$useActive$p.variant,
      variant = _useTheme$useActive$p2 === void 0 ? 'primary' : _useTheme$useActive$p2,
      rest = _objectWithoutProperties(_useTheme$useActive$p, _excluded);

  var _useVisible = useVisible(propsActive),
      active = _useVisible.active,
      visible = _useVisible.visible;

  return element('Alert', _objectSpread({
    'role': 'alert',
    'componentCx': ["alert-".concat(variant), (_ref = {}, _defineProperty(_ref, "alert-color-".concat(color), color), _defineProperty(_ref, "fade", dismissible), _defineProperty(_ref, "visible", visible), _ref)],
    'aria-hidden': dismissible ? String(!active) : 'false',
    'children': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "sr-only"
    }, ariaTitle || "".concat(color, " alert")), /*#__PURE__*/React.createElement("div", {
      className: "alert-content"
    }, children), dismissible && /*#__PURE__*/React.createElement(Alert.Close, {
      className: "font-color-".concat(color),
      onClick: deactivate
    }))
  }, rest));
};
Alert.displayName = 'Alert';
Alert.Close = staticComponent('AlertClose', closeBase);