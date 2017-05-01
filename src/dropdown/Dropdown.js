import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { closest } from '../utils/dom';

import Menu from './Menu';
import Trigger from './Trigger';

let count = 0;

/**
 * The `<Dropdown>` element creates a menu.
 *
 * ## Controlled and Uncontrolled
 * Dropdown functions as an uncontrolled element by default.
 *
 * TODO:
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 * - Why does dropdown render twice on close when using controlled active state?
 */
export default class Dropdown extends Component {
  static Trigger = Trigger
  static Menu = Menu

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onActivate: PropTypes.func,
    onDeactivate: PropTypes.func,
  }

  static defaultProps = {
    active: undefined,
    children: null,
    className: '',
    onActivate: () => {},
    onDeactivate: () => {},
  }

  constructor(props) {
    super(props);
    // Create a unique id for component that can be passed to trigger and menu for
    // binding aria attrs
    // NOTE: this won't work in server rendered apps 😣
    this.guid = 'dropdown-' + count++;
  }

  // If active is not passed as a prop, internal state is used for uncontrolled
  // dropdown
  state = {
    active: false,
  }

  // Methods
  // ---------------------------------------------------------------------------

  _clickHandler = e => {
    // Check if the click was inside the dropdown
    let clickInDropdown = closest(e.target, `${this.guid}-container`) ? true : false;

    // If the click was ouside dropdown, close the dropdown and then cleanup the listener
    if (!clickInDropdown) {
      this.toggleActive();
    }
  }

  _keyHandler = e => {
    // Escape key is which 27, when escape key is hit, toggle state
    if (e.which === 27) {
      this.toggleActive();
    }
  }

  toggleActive = e => {
    let { active } = this.props;
    if (active === undefined) {
      active = this.state.active;
    }

    if (!active) {
      // If the dropdown is closed, it's now opening, so setup event listeners
      this.props.onActivate(this, e); // Consumer hooks
      document.addEventListener('mouseup', this._clickHandler);
      document.addEventListener('touchend', this._clickHandler);
      document.addEventListener('keydown', this._keyHandler);
    } else {
      // If the dropdown is open, it's now closing, so remove event listeners
      this.props.onDeactivate(this, e); // Consumer hooks
      document.removeEventListener('mouseup', this._clickHandler);
      document.removeEventListener('touchend', this._clickHandler);
      document.removeEventListener('keydown', this._keyHandler);
    }

    if (this.props.active === undefined) {
      // State is not controlled, update internal state
      this.setState({ active: !active });
    }
  }

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const {
      children,
      className,
    } = this.props;
    // Default active to controlled prop, if undefined element is being used as
    // uncontrolled and we fall back to internal state tracking
    let _className = classnames('dropdown', `${this.guid}-container`, className);

    let { active } = this.props;
    if (active === undefined) {
      active = this.state.active;
    }

    // Find TRIGGER and MENU children and clone with needed props
    let _children = Children.map(children, child => {
      if (child.type.ROLE === 'TRIGGER') {
        return cloneElement(child, {
          active,
          guid: this.guid,
          toggleActive: this.toggleActive,
        });
      } else if (child.type.ROLE === 'MENU') {
        return cloneElement(child, { active, guid: this.guid });
      } else {
        return child;
      }
    });

    return (
      <div className={_className}>
        {_children}
      </div>
    );
  }
}
