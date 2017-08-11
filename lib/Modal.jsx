import React, { Component } from 'react';
import { bool, func, node } from 'prop-types';

import SimpleElement from './factories/SimpleElement';
import classNames from './utils/classnames';

let count = 0;

/**
 * TODO:
 * - User hooks
 * - Close button auto-wiring in header
 * - Close on escape** - All toggle items!
 * - Aria attrs
 * - Auto focus on open
 * - Animations on open
 * - Docs on passing flex align-items-center/start to header for close icon alignment
 *
 * @class Modal
 * @extends {Component}
 */
export default class Modal extends Component {
  static Header = SimpleElement({
    baseClasses: 'modal-header',
    id: `modal-${count}`
  });
  static Body = SimpleElement({ baseClasses: 'modal-body' });
  static Footer = SimpleElement({ baseClasses: 'modal-footer' });

  static propTypes = {
    active: bool.isRequired,
    children: node,
    large: bool,
    onDeactivate: func,
    small: bool
  };

  static defaultProps = {
    children: null,
    large: false,
    onDeactivate: () => {},
    small: false
  };

  // Create a unique id for component that can be passed to trigger and menu
  // for binding aria attrs
  // NOTE: this won't work in server rendered apps 😣
  guid = `modal-${(count += 1)}`;

  render() {
    const { active, children, large, small, onDeactivate } = this.props;
    const modalDialogClassNames = classNames('modal-dialog', {
      'modal-lg': large,
      'modal-sm': small
    });

    return (
      <div
        aria-hidden={active ? 'false' : 'true'}
        aria-labelledby={this.guid}
        className="modal fade"
        role="dialog"
        tabIndex="-1"
      >
        <div
          aria-hidden={active ? 'false' : 'true'}
          className="modal-backdrop fade"
          onClick={onDeactivate}
          role="presentation"
        />
        <div className={modalDialogClassNames} role="document">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
