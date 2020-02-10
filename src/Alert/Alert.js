import React from 'react'
import elem from '../elem-factory'
import { closeBase } from '../Close/Close'
import { useTheme } from '../Theme/Theme'
import { useActive, useVisible } from '../hooks'

/**
 * @typedef {Object} props
 * @property {string} props.ariaTitle Set a specific aria title
 * @property {string} props.color Set the theme color of the alert
 * @property {boolean} props.dismissible If true the alert is dismissible
 * @property {boolean} props.outline If true, the alert will have outline styles
 */

/** Alert component */
export default function Alert(props) {
  /** @type {props} */
  const {
    children,
    active: propsActive,
    ariaTitle,
    color,
    deactivate,
    dismissible,
    outline,
    ...rest
  } = { ...useTheme('Alert'), ...useActive(), ...props }

  const { active, visible } = useVisible(propsActive)

  return elem({
    role: 'alert',
    elemClassName: {
      alert: true,
      fade: dismissible, // Only include opacity transition class for disimissible alerts
      visible,
      [`alert-${color}`]: color,
      'alert-outline': outline,
    },
    // ⚠️ Only include aria-hidden value if the alert is dismissible
    'aria-hidden': dismissible ? String(!active) : undefined,
    children: (
      <>
        {/* Provide the alert color context for screen readers */}
        <div className='sr-only'>{ariaTitle || `${color} alert`}</div>

        {/* Alert contents */}
        <div className='alert-content'>{children}</div>

        {/* Render a close button or null depending on configs */}
        {dismissible && (
          <Alert.Close
            className={`alert-close font-color-${color}`}
            onClick={deactivate}
          />
        )}
      </>
    ),
    ...rest,
  })
}
Alert.displayName = 'Alert'

/** Alert close component */
Alert.Close = function AlertClose(props) {
  return elem({
    ...closeBase,
    ...useTheme('AlertClose'),
    ...props,
  })
}
