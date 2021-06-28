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
const Alert = elementFactory('Alert', ({
  ariaTitle,
  active = true,
  children,
  color,
  dismissible = false,
  deactivate,
  visible = true,
  // 🙅‍♀️ You shall not pass!
  activate,
  ...rest
}) => ({
  role: 'alert',
  className: {
    alert: true,
    fade: true,
    [`alert-${color}`]: color,
    show: visible
  },
  // hidden state is updated after active opacity transition
  'aria-hidden': active ? 'false' : 'true',
  children: /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sr-only"
  }, ariaTitle || `${color} alert`), /*#__PURE__*/React.createElement("div", {
    className: "alert-content"
  }, children), dismissible && /*#__PURE__*/React.createElement(Close, {
    onClick: deactivate,
    className: `text-${color}`
  })),
  ...rest
}));
export default withActive({
  defaultActive: true,
  transitionState: true
})(Alert);