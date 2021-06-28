import React from 'react';
import { BaseButton } from '../Button/Button';
import elementFactory from '../component-factories/element';
export default elementFactory('Close', {
  className: 'btn-close',
  tag: BaseButton,
  children: /*#__PURE__*/React.createElement("svg", {
    className: "icon close font",
    role: "img",
    "aria-label": "close"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#close",
    xlinkHref: "#close"
  }))
});