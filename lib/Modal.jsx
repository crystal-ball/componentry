import React, { Component } from 'react';
import { bool, node } from 'prop-types';

import pureElementFactory from './factories/pure-element-factory';
import classNames from './utils/classnames';

let count = 0;

/**
 * TODO:
 * - User hooks
 * - Close button auto-wiring in header
 * - Close on escape** - All toggle items!
 * - Aria attrs
 * - Auto focus
 * - Animations
 *
 * @class Modal
 * @extends {Component}
 */
class Modal extends Component {
  constructor(props) {
    super(props);
    // Create a unique id for component that can be passed to trigger and menu
    // for binding aria attrs
    // NOTE: this won't work in server rendered apps 😣
    this.guid = `modal-${(count += 1)}`;
  }

  render() {
    const { active, children, large, small } = this.props;
    const modalDialogClassNames = classNames('modal-dialog', {
      'modal-lg': large,
      'modal-sm': small
    });

    return (
      <div>
        <div
          className="modal-backdrop fade"
          aria-hidden={active ? 'false' : 'true'}
        />
        <div
          className="modal fade"
          aria-hidden={active ? 'false' : 'true'}
          role="dialog"
          tabIndex="-1"
          aria-labelledby={this.guid}
        >
          <div className={modalDialogClassNames} role="document">
            <div className="modal-content">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.Header = pureElementFactory({
  baseClasses: 'modal-header',
  id: `modal-${count}`
});
Modal.Body = pureElementFactory({ baseClasses: 'modal-body' });
Modal.Footer = pureElementFactory({ baseClasses: 'modal-footer' });

Modal.propTypes = {
  active: bool.isRequired,
  children: node,
  large: bool,
  small: bool
};

Modal.defaultProps = {
  children: null,
  large: false,
  small: false
};

export default Modal;
