// @flow
import React, { Component, createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { number, shape } from 'prop-types'
import classNames from 'classnames'

/* eslint-disable */
import Button from '../Button'
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
   * When passed `onDismiss` will be called in place of internal dismiss hanlder.
   * Note that opacity transition and hiding of component must be handled externally
   * when passing a custom `onDismiss` handler. _(Recommended to pass `aria-hidden`
   * to handle hiding when using as a controlled component)_
   */
  onDismiss?: () => void,
  /**
   * Length of opacity transition, defaults to 300ms or `THEME` value if set using
   * `ThemeProvider`.
   */
  visibilityTransitionLength?: number
}

type State = {
  /**
   * Fade controls opacity transition for alert on dismissal
   */
  fade: boolean,
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
export default class Alert extends Component<Props, State> {
  static contextTypes = {
    THEME: shape({ visibilityTransitionLength: number })
  }

  static defaultProps = {
    dismissible: true
  }

  // Fade controls visibility status and hidden controls DOM position status
  state = {
    fade: false,
    hidden: false
  }

  /**
   * Backup onDismiss for dismissible alerts without a passed onDismiss. Note that
   * this is just a convenience method. Passing an `onDismiss` that handles updating
   * application state to dismiss an alert is preferred.
   */
  handleDismiss = () => {
    const { visibilityTransitionLength = 300 } = this.context.THEME || {}
    // props has precedence to allow for single instance overrides, context can be
    // used for app wide configs, fall back to defaults
    const timer: number =
      this.props.visibilityTransitionLength || visibilityTransitionLength

    // Will immediately set Bs 'fade' class to transition opacity to 0
    this.setState({ fade: true }, () => {
      // Roughly when transition is finished, add aria-hidden to element to remove display
      setTimeout(() => {
        this.setState({ hidden: true })
      }, timer)
    })
  }

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const {
      as,
      children,
      className,
      color,
      dismissible,
      onDismiss,
      visibilityTransitionLength, // prevent dom inclusion
      ...rest
    } = this.props
    const { fade, hidden } = this.state
    const classes: string = classNames('alert', className, {
      [`alert-${color}`]: color,
      fade
    })

    return createElement(
      as || 'div',
      {
        key: 'alert-container',
        role: 'alert',
        className: classes,
        'aria-hidden': hidden ? 'true' : 'false',
        ...rest
      },
      // Alert contents:
      <div className="alert-content">{children}</div>,
      // Render a close button or null depending on configs
      dismissible && (
        <Button
          link
          onClick={onDismiss || this.handleDismiss}
          className={`text-${color}`}
        >
          <svg className="icon close font" role="img" aria-label="close">
            <use href="#close" />
          </svg>
        </Button>
      )
    )
  }
}
