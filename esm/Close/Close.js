/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { staticComponent } from '../utils/static-component-builder';
export var closeBase = {
  'aria-label': 'close',
  'as': 'button',
  'type': 'button',
  'children': /*#__PURE__*/React.createElement("svg", {
    className: "\uD83C\uDD72-icon icon-close font-variant",
    role: "img"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#close",
    xlinkHref: "#close"
  }))
};
/**
 * [Close component 📝](https://componentry.design/components/close)
 * @experimental
 */

export var Close = staticComponent('Close', closeBase);