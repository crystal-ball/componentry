import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant", "id"];

/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator'; // Module augmentation interface for overriding component props' types

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export var Icon = function Icon(props) {
  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('Icon')), props),
      _useTheme$props$varia = _useTheme$props.variant,
      variant = _useTheme$props$varia === void 0 ? 'font' : _useTheme$props$varia,
      id = _useTheme$props.id,
      rest = _objectWithoutProperties(_useTheme$props, _excluded);

  return element('Icon', _objectSpread({
    as: 'svg',
    role: 'img',
    componentCx: ["".concat(variant, "-variant"), "icon-".concat(id)],
    children: /*#__PURE__*/React.createElement("use", {
      href: "#".concat(id),
      xlinkHref: "#".concat(id)
    })
  }, rest));
};
Icon.displayName = 'Icon';