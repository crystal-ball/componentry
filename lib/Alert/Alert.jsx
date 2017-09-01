import React, { Component } from 'react'
import { bool, func, number, node, oneOf, shape, string } from 'prop-types'
import classNames from 'classnames'

import Button from '../Button'
import { Close } from '../Icon'
import { themeColorNames } from '../utils/theme'

/**
 * Alerts provide contextual feedback.
 * To Document:
 * - Internal fallback _hidden method, onDismiss preferred
 * - Internal fade and hidden states
 * - onDismiss and dismissable configurations
 * - alerts only have info classes, not primary or secondary, b/c they are intended
 *   to be used as an actual alert with context, denoted by role=alert. For non-alert
 *   information blocks a card with primary or secondary colors can be used.
 */
export default class Alert extends Component {
  static contextTypes = {
    COMPONENTRY_THEME: shape({
      visibilityTransitionLength: number
    })
  }

  static propTypes = {
    children: node,
    className: string,
    color: oneOf(themeColorNames),
    dismissable: bool,
    onDismiss: func,
    visibilityTransitionLength: number
  }

  static defaultProps = {
    children: null,
    className: '',
    color: '',
    dismissable: true,
    onDismiss: null,
    visibilityTransitionLength: null
  }

  // Fade controls visibility status and hidden controls DOM position status
  state = {
    fade: false,
    hidden: false
  }

  /**
   * Backup onDismiss for dismissable alerts without a passed onDismiss. Note that
   * this is just a convenience method. Passing an `onDismiss` that handles updating
   * application state to dismiss an alert is preferred.
   */
  handleDismiss = () => {
    const {
      COMPONENTRY_THEME: { visibilityTransitionLength = 300 } = {}
    } = this.context
    // props has precedence to allow for single instance overrides, context can be
    // used for app wide configs, fall back to defaults
    const timer =
      this.props.visibilityTransitionLength || visibilityTransitionLength

    // Will immediately set Bs 'fade' class to transition opacity to 0
    this.setState({ fade: true })
    // Roughly when transition is finished, add aria-hidden to element to remove display
    setTimeout(() => {
      this.setState({ hidden: true })
    }, timer)
  }

  // Render
  // ---------------------------------------------------------------------------
  render() {
    /* eslint-disable prefer-const */
    let {
      children,
      className,
      color,
      dismissable,
      onDismiss,
      visibilityTransitionLength,
      ...rest
    } = this.props
    /* eslint-enable prefer const */
    const { fade, hidden } = this.state

    className = classNames('alert', className, {
      [`alert-${color}`]: color,
      fade
    })

    return (
      <div
        role="alert"
        className={className}
        aria-hidden={hidden ? 'true' : 'false'}
        {...rest}
      >
        <div className="alert-content">{children}</div>
        {/* Render a close button or null depending on configs */}
        {dismissable && (
          <Button
            link
            onClick={onDismiss || this.handleDismiss}
            className={`text-${color}`}
          >
            <Close />
          </Button>
        )}
      </div>
    )
  }
}
