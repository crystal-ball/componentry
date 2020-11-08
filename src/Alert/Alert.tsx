import React from 'react'
import { closeBase } from '../Close/Close'
import { useTheme } from '../Theme/Theme'
import { useActive, useVisible } from '../hooks'
import { BaseProps } from '../utils/base-types'
import { element } from '../utils/element-creator'
import { staticComponent } from '../utils/static-component-builder'

interface CardCloseProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {}

interface AlertProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
  /** Sets a custom aria title */
  ariaTitle?: string
  /** Sets the theme color of the alert */
  color?: 'primary' | 'success' | 'warning' | 'critical'
  /** Deactivate handler called on click of Alert dismiss button */
  deactivate?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Toggles alert dismissible feature */
  dismissible?: boolean
  /** Toggles alert outline styles */
  outline?: boolean
}

interface Alert {
  (props: AlertProps): React.ReactElement
  displayName: 'Alert'
  /**
   * [Alert close component 📝](https://componentry.design/components/alert)
   */
  Close: React.FC<CardCloseProps>
}

/**
 * [Alert component 📝](https://componentry.design/components/alert)
 */
export const Alert: Alert = (props) => {
  const {
    children,
    active: propsActive,
    ariaTitle,
    color,
    deactivate,
    dismissible,
    outline,
    ...rest
  } = { ...useTheme<AlertProps>('Alert'), ...useActive(), ...props }

  const { active, visible } = useVisible(propsActive)

  return element({
    'role': 'alert',
    'componentCx': {
      'alert': true,
      'fade': dismissible, // Only include opacity transition class for disimissible alerts
      visible,
      [`alert-${color}`]: color,
      'alert-outline': outline,
    },
    // ⚠️ Only include aria-hidden value if the alert is dismissible
    'aria-hidden': dismissible ? String(!active) : undefined,
    'children': (
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

Alert.Close = staticComponent<CardCloseProps>('AlertClose', closeBase)
