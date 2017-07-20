import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Close from './Close';
import classNames from './utils/classnames';
import cleanProps from './utils/clean-props';
import { visibilityTransitionLength } from './utils/configurations';

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
  constructor(props) {
    super(props);
    // Fade controls visibility status and hidden controls DOM position status
    this.state = {
      fade: false,
      hidden: false,
    };

    this._dismiss = this._dismiss.bind(this);
    this.renderClose = this.renderClose.bind(this);
  }

  /**
   * Backup onDismiss for dismissable alerts without a passed onDismiss. Note that
   * this is just a convenience method. Passing an `onDismiss` that handles updating
   * application state to dismiss an alert is preferred.
   */
  _dismiss() {
    // props has precedence to allow for single instance overrides, context can be
    // used for app wide configs, fall back to defaults
    const timer =
      this.props.visibilityTransitionLength ||
      this.context.visibilityTransitionLength ||
      visibilityTransitionLength;

    // Will immediately set BS 'fade' class to transition opacity to 0
    this.setState({ fade: true });
    // Roughly when transition is finished, add aria-hidden to element to remove display
    setTimeout(() => {
      this.setState({ hidden: true });
    }, timer);
  }

  // Render
  // ---------------------------------------------------------------------------
  /**
   * If the alert is dismissable create a close button, otherwise return null
   * @return {Component|null}
   */
  renderClose() {
    let { dismissable, onDismiss } = this.props;
    // If alert is dismissable, but an onDismiss wasn't passed, use our internal
    // fade out
    onDismiss = onDismiss || this._dismiss;

    return dismissable
      ? <Button link onClick={onDismiss} className="close" aria-label="close">
          <Close />
        </Button>
      : null;
  }

  render() {
    let { children, className, color, ...other } = this.props;
    let { fade, hidden } = this.state;
    let { ...dom } = cleanProps(other, [
      'dismissable',
      'onDismiss',
      'visibilityTransitionLength',
    ]);

    className = classNames('alert', className, {
      [`alert-${color}`]: color,
      fade: fade,
    });

    return (
      <div
        role="alert"
        className={className}
        aria-hidden={hidden ? 'true' : 'false'}
        {...dom}
      >
        <div className="alert-content">
          {children}
        </div>
        {/* Render a close button or null depending on configs */}
        {this.renderClose()}
      </div>
    );
  }
}

Alert.contextTypes = {
  visibilityTransitionLength: PropTypes.number,
};

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  dismissable: PropTypes.bool,
  onDismiss: PropTypes.func,
  visibilityTransitionLength: PropTypes.number,
};

Alert.defaultProps = {
  children: null,
  className: '',
  color: '',
  dismissable: true,
  onDismiss: null,
  visibilityTransitionLength: null,
};
