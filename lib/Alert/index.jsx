// @flow
import React, { Component, createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { number, shape } from 'prop-types'
import classNames from 'classnames'

import Button from '../Button'
import withActive from '../HOCs/withActive'
import type { ThemeColors } from '../utils/theme'

type Props = {
  /**
   * Render component as
   */
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
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

  activate?: Function,
  active?: boolean,
  deactivate: Function
}

type State = {
  /**
   * Hidden controls DOM hidden after opacity transition on dismissal
   */
  hidden: boolean
}

/**
 * Alerts provide contextual feedback to users. Alerts are available in the info
 * theme colors success, info, warning and danger. They are not available in primary
 * or secondary theme colors because they are intended to be used for alerting with
 * context. For non alert information blocks a card with theme color primary or
 * secondary can be used.
 */
class Alert extends Component<Props, State> {
  static contextTypes = {
    THEME: shape({ transitionDuration: number })
  }

  static defaultProps = {
    active: true,
    dismissible: false
  }

  // Fade controls visibility status and hidden controls DOM position status
  state = {
    hidden: false
  }

  /**
   * Alert component needs to always call internal handleDismiss so that we can run
   * the visibility transition. The `active` prop is used to control visibility and
   * state `hidden` handles aria-hidden post transition.
   */
  handleDismiss = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { transitionDuration = 300 } = this.context.THEME || {}
    // props has precedence to allow for single instance overrides, context can be
    // used for app wide configs, fall back to defaults
    const timer: number = this.props.transitionDuration || transitionDuration

    // Immediately deactivate the alert, this will begin the opacity fade
    this.props.deactivate(e, this)

    // Roughly when transition is finished, add aria-hidden to element to remove display
    setTimeout(() => {
      this.setState({ hidden: true })
    }, timer)
  }

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const {
      activate, // prevent dom inclusion
      active,
      as,
      children,
      className,
      color,
      dismissible,
      deactivate,
      transitionDuration, // prevent dom inclusion
      ...rest
    } = this.props

    return createElement(
      as || 'div',
      {
        role: 'alert',
        className: classNames('alert', className, {
          [`alert-${color}`]: color,
          // When not active add fade class to begin opacity transtion, element is
          // hidden from DOM after transition length
          fade: !active
        }),
        // hidden state is updated after active opacity transition
        'aria-hidden': this.state.hidden ? 'true' : 'false',
        ...rest
      },
      // Alert contents:
      <div className="alert-content">{children}</div>,
      // Render a close button or null depending on configs
      dismissible && (
        <Button link onClick={this.handleDismiss} className={`text-${color}`}>
          <svg className="icon close font" role="img" aria-label="close">
            <use href="#close" />
          </svg>
        </Button>
      )
    )
  }
}

const withActiveAlert = withActive(Alert)

export default withActiveAlert
