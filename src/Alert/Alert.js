import React from 'react'
import elem from '../elem-factory'
import { closeBase } from '../Close/Close'
import { useTheme } from '../Theme/Theme'
import { useActive, useVisible } from '../hooks'

/**
 * Alerts provide contextual feedback to users. Alerts are available in the info
 * theme colors success, info, warning and danger. They are not available in primary
 * or secondary theme colors because they are intended to be used for alerting with
 * context. For non alert information blocks a card with theme color primary or
 * secondary can be used.
 *
 * TODO: docs on dismissible vs non-dismissible alerts usage
 * TODO: ⚠️ For dismissible Alerts, the active context must be set docs
 */
export default function Alert(props) {
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
          <Alert.Close className={`alert-close text-${color}`} onClick={deactivate} />
        )}
      </>
    ),
    ...rest,
  })
}
Alert.displayName = 'Alert'

/**
 * Alert close component
 */
Alert.Close = function AlertClose(props) {
  return elem({
    ...closeBase,
    ...useTheme('AlertClose'),
    ...props,
  })
}
