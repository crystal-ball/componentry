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
export const Alert = props => {
  const {
    children,
    active: propsActive,
    ariaTitle,
    color,
    deactivate,
    dismissible,
    variant = 'primary',
    ...rest
  } = { ...useTheme('Alert'),
    ...useActive(),
    ...props
  };
  const {
    active,
    visible
  } = useVisible(propsActive);
  return element('Alert', {
    'role': 'alert',
    'componentCx': [`alert-${variant}`, {
      [`alert-color-${color}`]: color,
      fade: dismissible,
      // Only include opacity transition class for disimissible alerts
      visible
    }],
    'aria-hidden': dismissible ? String(!active) : 'false',
    'children': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "sr-only"
    }, ariaTitle || `${color} alert`), /*#__PURE__*/React.createElement("div", {
      className: "alert-content"
    }, children), dismissible && /*#__PURE__*/React.createElement(Alert.Close, {
      className: `font-color-${color}`,
      onClick: deactivate
    })),
    ...rest
  });
};
Alert.displayName = 'Alert';
Alert.Close = staticComponent('AlertClose', closeBase);