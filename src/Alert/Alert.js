// @flow
import React, { Fragment, createElement } from 'react'
import classnames from 'classnames'
import Close from '../Close/Close'
import withActive, { type ActiveProps } from '../withActive/withActive'
import withTheme from '../withTheme/withTheme'
import { cleanActive } from '../utils/clean-props'
import { type ElementProps } from '../component-factories/element'
import type { ThemeColors } from '../utils/theme'

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
   * Pass `true` to render an outline style alert
   */
  outline?: boolean,
  /**
   * Length of opacity transition, defaults to 300ms or `THEME` value if set using
   * `ThemeProvider`.
   */
  transitionDuration?: number,
} & ActiveProps &
  ElementProps

/**
 * Alerts provide contextual feedback to users. Alerts are available in the info
 * theme colors success, info, warning and danger. They are not available in primary
 * or secondary theme colors because they are intended to be used for alerting with
 * context. For non alert information blocks a card with theme color primary or
 * secondary can be used.
 */

const Alert = ({
  as,
  children,
  className,
  active,
  ariaTitle,
  color,
  deactivate,
  dismissible,
  outline,
  visible,
  ...rest
}: Props) =>
  createElement(
    as || 'div',
    {
      role: 'alert',
      className: classnames('alert fade', className, {
        [`alert-${color}`]: color,
        show: visible,
        outline,
      }),
      // hidden state is updated after active opacity transition
      'aria-hidden': active ? 'false' : 'true',
      ...cleanActive(rest),
    },
    <Fragment>
      {/* Provide the alert color context for screen readers */}
      <div className="sr-only">{ariaTitle || `${color} alert`}</div>
      {/* Alert contents */}
      <div className="alert-content">{children}</div>
      {/* Render a close button or null depending on configs */}
      {dismissible && <Close onClick={deactivate} className={`text-${color}`} />}
    </Fragment>,
  )
Alert.displayName = 'Alert'

export default withActive({ defaultActive: true, transitionState: true })(
  withTheme(Alert),
)
