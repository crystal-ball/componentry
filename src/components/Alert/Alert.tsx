import React from 'react'
import { closeBase } from '../Close/Close'
import { useThemeProps } from '../Provider/Provider'
import { useActive, useVisible } from '../../hooks'
import { type ComponentBaseProps } from '../../utils/base-types'
import { type MergePropTypes } from '../../utils/types'
import { element } from '../../utils/element-creator'
import { staticComponent } from '../../utils/static-component-builder'

/** Module augmentation interface for overriding component props' types */
export interface AlertPropsOverrides {}

interface AlertPropsBase {
  /** Sets a custom aria title */
  ariaTitle?: string
  /** Sets the theme color of the alert */
  color?: 'primary' | 'success' | 'warning' | 'critical'
  /** Deactivate handler called on click of Alert dismiss button */
  deactivate?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Toggles alert dismissible feature */
  dismissible?: boolean
  /**
   * Controls when the component content is mounted where:
   * - `'always'` - The content will be mounted when the element is both visible
   *   and not visible
   * - `'visible'` - The content will only be mounted when visible, when not
   *   visible the contents are not rendered for performance.
   */
  mounted?: 'always' | 'visible'
  /** Sets the alert variant style */
  variant?: 'filled'
}

export type AlertProps = MergePropTypes<AlertPropsBase, AlertPropsOverrides> &
  ComponentBaseProps<'div'>

interface AlertCloseProps extends ComponentBaseProps<'button'> {}

export interface Alert {
  (props: AlertProps): React.ReactElement | null
  displayName: 'Alert'
  /**
   * [Alert close component 📝](https://componentry.design/components/alert)
   */
  Close: React.FC<AlertCloseProps>
}

/**
 * [Alert component 📝](https://componentry.design/components/alert)
 * @alpha
 */
export const Alert: Alert = (props) => {
  const {
    children,
    active: _active,
    ariaTitle,
    color,
    deactivate,
    mounted = 'visible',
    dismissible,
    variant = 'filled',
    ...rest
  } = { ...useThemeProps('Alert'), ...useActive(), ...props }

  const { active, visible } = useVisible(_active)

  if (dismissible && !active && mounted === 'visible') return null

  return element({
    role: 'alert',
    componentCx: [
      `C9Y-Alert-base C9Y-Alert-${variant}`,
      {
        [`C9Y-Alert-${color}Color`]: color,
        'C9Y-Alert-dismissible': dismissible,
        'C9Y-Alert-dismissed': dismissible && !visible,
      },
    ],
    'aria-hidden': dismissible ? String(!active) : 'false',
    children: (
      <>
        {/* Provide the alert color context for screen readers */}
        <div className='sr-only'>{ariaTitle || `${color} alert`}</div>

        {/* Alert contents */}
        <div className='C9Y-AlertContent'>{children}</div>

        {/* Render a close button or null depending on configs */}
        {dismissible && <Alert.Close className='C9Y-AlertClose' onClick={deactivate} />}
      </>
    ),
    ...rest,
  })
}
Alert.displayName = 'Alert'

Alert.Close = staticComponent<AlertCloseProps>('AlertClose', closeBase)
