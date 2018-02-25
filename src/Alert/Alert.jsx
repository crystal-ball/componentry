// @flow
import React, { createElement } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

import Close from '../Close/Close'
import withActive from '../withActive/withActive'

import type { ThemeColors } from '../utils/theme'
import type { ActiveProps } from '../withActive/withActive'
import type { ElementProps } from '../component-factories/element-factory'

type Props = {
  /**
   * Provides contextual information to screen readers that sighted users would gain
   * from the alert color. Defaults to: 'COLOR alert', eg 'Success alert'
   */
  ariaTitle: string,
  /**
   * Theme color for alert
   */
  color: ThemeColors,
  /**
   * Pass `false` to suppress alert dismiss button
   */
  dismissible?: boolean,
  /**
   * Length of opacity transition, defaults to 300ms or `THEME` value if set using
   * `ThemeProvider`.
   */
  transitionDuration?: number,
} & ActiveProps &
  ElementProps

type Context = { [string]: { [string]: any } }

/**
 * Alerts provide contextual feedback to users. Alerts are available in the info
 * theme colors success, info, warning and danger. They are not available in primary
 * or secondary theme colors because they are intended to be used for alerting with
 * context. For non alert information blocks a card with theme color primary or
 * secondary can be used.
 */
const Alert = (props: Props, { THEME = {} }: Context) => {
  const componentCtx = THEME.Alert || {}
  const {
    ariaTitle,
    activate, // prevent dom inclusion
    active,
    as,
    children,
    className,
    color,
    dismissible,
    deactivate,
    visible,
    ...rest
  } = { ...componentCtx, ...props }

  return createElement(
    as || 'div',
    {
      role: 'alert',
      className: classNames('alert', 'fade', componentCtx.className, className, {
        [`alert-${color}`]: color,
        show: visible,
      }),
      // hidden state is updated after active opacity transition
      'aria-hidden': active ? 'false' : 'true',
      ...rest,
    },
    // Provide the alert color context for screen readers
    <div className="sr-only">{ariaTitle || `${color} alert`}</div>,
    // Alert contents:
    <div className="alert-content">{children}</div>,
    // Render a close button or null depending on configs
    dismissible && <Close onClick={deactivate} className={`text-${color}`} />,
  )
}

Alert.displayName = 'Alert'
Alert.defaultProps = {
  /* eslint-disable react/default-props-match-prop-types */
  active: true,
  visible: true,
  dismissible: false,
}
Alert.contextTypes = { THEME: shape({ Alert: object }) }

const withActiveAlert = withActive({ defaultActive: true, transitionState: true })(
  Alert,
)

export default withActiveAlert
