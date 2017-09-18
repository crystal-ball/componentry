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
 * - onDismiss and dismissible configurations
 * - how to have a controlled alert?
 * - alerts only have info classes, not primary or secondary, b/c they are intended
 *   to be used as an actual alert with context, denoted by role=alert. For non-alert
 *   information blocks a card with primary or secondary colors can be used.
 */
export default class Alert extends Component {
  static contextTypes = {
    COMPONENTRY_THEME: shape({
      closeSVG: node,
      visibilityTransitionLength: number
    })
  }

  static propTypes = {
    children: node,
    className: string,
    closeSVG: node,
    color: oneOf(themeColorNames).isRequired,
    dismissible: bool,
    onDismiss: func,
    visibilityTransitionLength: number
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
    const {
      COMPONENTRY_THEME: { visibilityTransitionLength = 300 } = {}
    } = this.context
    // props has precedence to allow for single instance overrides, context can be
    // used for app wide configs, fall back to defaults
    const timer =
      this.props.visibilityTransitionLength || visibilityTransitionLength

    // Will immediately set Bs 'fade' class to transition opacity to 0
    this.setState({ fade: true }, () => {
      // Roughly when transition is finished, add aria-hidden to element to remove display
      setTimeout(() => {
        this.setState({ hidden: true })
      }, timer)
    })
  }

  renderClose() {
    const { COMPONENTRY_THEME = {} } = this.context
    const CloseSVG = this.props.closeSVG || COMPONENTRY_THEME.closeSVG || Close
    return <CloseSVG />
  }

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const {
      children,
      className,
      closeSVG, // prevent dom inclusion
      color,
      dismissible,
      onDismiss,
      visibilityTransitionLength, // prevent dom inclusion
      ...rest
    } = this.props
    const { fade, hidden } = this.state
    const classes = classNames('alert', className, {
      [`alert-${color}`]: color,
      fade
    })

    return (
      <div
        role="alert"
        className={classes}
        aria-hidden={hidden ? 'true' : 'false'}
        {...rest}
      >
        <div className="alert-content">{children}</div>
        {/* Render a close button or null depending on configs */}
        {dismissible && (
          <Button
            link
            onClick={onDismiss || this.handleDismiss}
            className={`text-${color}`}
          >
            {this.renderClose()}
          </Button>
        )}
      </div>
    )
  }
}
