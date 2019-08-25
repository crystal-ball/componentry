import React from 'react'
import Close from '../Close/Close'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'
import { useActive, useVisible } from '../Active/Active'

/**
 * Alerts provide contextual feedback to users. Alerts are available in the info
 * theme colors success, info, warning and danger. They are not available in primary
 * or secondary theme colors because they are intended to be used for alerting with
 * context. For non alert information blocks a card with theme color primary or
 * secondary can be used.
 *
 * TODO: docs on dismissible vs non-dismissible alerts usage
 * TODO: ⚠️ For dismissible Alerts, the active context must be set docs
 * TODO: Use Alert.Close instead of Close directly
 */
export default function Alert(props) {
  const {
    children,
    active,
    ariaTitle,
    color,
    deactivate,
    dismissible,
    outline,
    ...rest
  } = { ...useTheme('Alert'), ...useActive(), ...props }

  const { active: _active, visible } = useVisible(active)

  return elem({
    role: 'alert',
    componentClassNames: {
      alert: true,
      // Only include opacity transition class for disimissible alerts
      fade: dismissible,
      [`alert-${color}`]: color,
      // Show controls opacity transitions
      show: visible,
      'alert-outline': outline,
    },
    // ⚠️ Only include aria-hidden value if the alert is dismissible
    'aria-hidden': dismissible ? String(!_active) : undefined,
    children: (
      <>
        {/* Provide the alert color context for screen readers */}
        <div className='sr-only'>{ariaTitle || `${color} alert`}</div>

        {/* Alert contents */}
        <div className='alert-content'>{children}</div>

        {/* Render a close button or null depending on configs */}
        {dismissible && (
          <Alert.Close onClick={deactivate} className={`alert-close text-${color}`} />
        )}
      </>
    ),
    ...rest,
  })
}

Alert.Close = Close
