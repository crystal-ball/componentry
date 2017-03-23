import React, { Component, PropTypes } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';
import { VISIBILITY_TRANSITION_LENGTH } from './utils/constants';

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
export class Alert extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    dismissable: PropTypes.bool,
    onDismiss: PropTypes.func
  }

  static defaultProps = {
    children: null,
    className: '',
    color: '',
    dismissable: true,
    onDismiss: null
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
  _dismiss = () => {
    // Will immediately set BS 'fade' class to transition opacity to 0
    this.setState({ fade: true });
    // Roughly when transition is finished, add aria-hidden to element to remove display
    setTimeout(() => {
      this.setState({ hidden: true });
    }, VISIBILITY_TRANSITION_LENGTH);
  }

  // Render
  // ---------------------------------------------------------------------------
  /**
   * If the alert is dismissable create a close button, otherwise return null
   * @return {Component|null}
   */
  renderClose = () => {
    let { dismissable, onDismiss } = this.props;
    // If alert is dismissable, but an onDismiss wasn't passed, use our internal
    // fade out
    onDismiss = onDismiss || this._dismiss;

    return dismissable ?
      (<Button link onClick={onDismiss} className='close' aria-label='close'>
        <Icon icon='close' />
      </Button>)
      : null;
  }

  render() {
    let {
      children,
      className='',
      color='',
      dismissable, // eslint-disable-line
      onDismiss, // eslint-disable-line
      ...other
    } = this.props;
    // declare dismissable, onDismiss to keep ...other spread render safe
    let { fade, hidden } = this.state;

    let _className = 'alert';
    _className += color ? ` alert-${color}` : '';
    _className += className ? ` ${className}` : '';
    _className += fade ? ' fade' : '';
    let ariaHidden = hidden ? 'true' : 'false';

    let close = this.renderClose();

    return (
      <div className={_className} role='alert' {...other} aria-hidden={ariaHidden}>
        <div className='alert-content'>
          {children}
        </div>
        {close}
      </div>
    );
  }
}
