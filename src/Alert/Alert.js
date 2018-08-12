// @flow
import React, { Fragment, type Node } from 'react'
import Close from '../Close/Close'
import withActive, { type ActiveProps } from '../withActive'
import elem from '../elem-factory'
import withTheme from '../withTheme'
import { cleanActive } from '../utils/clean-props'
import type { ThemeColors } from '../utils/theme'

type Props = {
  children: Node,
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
} & ActiveProps

/**
 * Alerts provide contextual feedback to users. Alerts are available in the info
 * theme colors success, info, warning and danger. They are not available in primary
 * or secondary theme colors because they are intended to be used for alerting with
 * context. For non alert information blocks a card with theme color primary or
 * secondary can be used.
 */

const Alert = withTheme(
  'Alert',
  ({
    children,
    active,
    ariaTitle,
    color,
    deactivate,
    dismissible,
    outline,
    visible,
    ...rest
  }: Props) =>
    elem({
      role: 'alert',
      classes: {
        alert: true,
        fade: true,
        [`alert-${color}`]: color,
        show: visible,
        'alert-outline': outline,
      },
      // hidden state is updated after active opacity transition
      'aria-hidden': active ? 'false' : 'true',
      children: (
        <Fragment>
          {/* Provide the alert color context for screen readers */}
          <div className="sr-only">{ariaTitle || `${color} alert`}</div>
          {/* Alert contents */}
          <div className="alert-content">{children}</div>
          {/* Render a close button or null depending on configs */}
          {dismissible && <Close onClick={deactivate} className={`text-${color}`} />}
        </Fragment>
      ),
      ...cleanActive(rest),
    }),
)

export default withActive({ defaultActive: true, transitionState: true })(Alert)
