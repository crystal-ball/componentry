import React from 'react'
import { closeBase } from '../Close/Close'
import { useTheme } from '../Theme/Theme'
import { useActive, useVisible } from '../../hooks'
import { ComponentBaseProps } from '../../utils/types'
import { element } from '../../utils/element-creator'
import { staticComponent } from '../../utils/static-component-builder'

interface CardCloseProps extends ComponentBaseProps<'button'> {}

interface AlertProps extends ComponentBaseProps<'div'> {
  /** Sets a custom aria title */
  ariaTitle?: string
  /** Sets the theme color of the alert */
  color?: 'primary' | 'success' | 'warning' | 'critical'
  /** Deactivate handler called on click of Alert dismiss button */
  deactivate?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Toggles alert dismissible feature */
  dismissible?: boolean
  /** Sets the alert variant style */
  variant?: 'filled'
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
 * @experimental
 */
export const Alert: Alert = (props) => {
  const {
    children,
    active: propsActive,
    ariaTitle,
    color,
    deactivate,
    dismissible,
    variant = 'filled',
    ...rest
  } = { ...useTheme<AlertProps>('Alert'), ...useActive(), ...props }

  const { active, visible } = useVisible(propsActive)

  return element('Alert', {
    'role': 'alert',
    'componentCx': [
      `🅲Alert-base 🅲Alert-${variant}`,
      {
        [`🅲Alert-${color}Color`]: color,
        fade: dismissible, // Only include opacity transition class for dismissible alerts
        visible,
      },
    ],
    'aria-hidden': dismissible ? String(!active) : 'false',
    'children': (
      <>
        {/* Provide the alert color context for screen readers */}
        <div className='sr-only'>{ariaTitle || `${color} alert`}</div>

        {/* Alert contents */}
        <div className='🅲Alert-content'>{children}</div>

        {/* Render a close button or null depending on configs */}
        {dismissible && <Alert.Close className='🅲Alert-close' onClick={deactivate} />}
      </>
    ),
    ...rest,
  })
}
Alert.displayName = 'Alert'

Alert.Close = staticComponent<CardCloseProps>('AlertClose', closeBase)
