import React, { Component, PropTypes, Children, cloneElement } from 'react';
import classnames from 'classnames';
import $ from 'cash-dom';

import Menu from './Menu';
import Trigger from './Trigger';

let count = 0;

export default class Dropdown extends Component {
  static Trigger = Trigger
  static Menu = Menu

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  static defaultProps = {
    children: null,
    className: ''
  }

  constructor(props) {
    super(props);
    // Create a unique id for component that can be passed to trigger and menu for
    // binding aria attrs
    // NOTE: this won't work in server rendered apps 😣
    this.guid = 'dropdown-' + count++;
  }

  state = {
    active: false
  }

  _clickHandler = e => {
    // Check if the click was inside the dropdown
    let clickInDropdown = $(e.target).closest(`#${this.guid}-container`).length ? true : false;

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

  toggleActive = () => {
    const { active } = this.state;

    if (!active) {
      // If the dropdown is closed, it's now opening, so setup event listeners
      document.addEventListener('mouseup', this._clickHandler);
      document.addEventListener('touchend', this._clickHandler);
      document.addEventListener('keydown', this._keyHandler);
    } else {
      // If the dropdown is open, it's now closing, so remove event listeners
      document.removeEventListener('mouseup', this._clickHandler);
      document.removeEventListener('touchend', this._clickHandler);
      document.removeEventListener('keydown', this._keyHandler);
    }

    this.setState({ active: !active });
  }

  render() {
    const {
      children,
      className
    } = this.props;
    const { active } = this.state;
    let _children;
    let _className = classnames('dropdown', className);

    _children = Children.map(children, child => {
      if (child.type.ROLE === 'TRIGGER') {
        return cloneElement(child, {
          active,
          guid: this.guid,
          toggleActive: this.toggleActive
        });
      } else if (child.type.ROLE === 'MENU') {
        return cloneElement(child, { active, guid: this.guid });
      } else {
        return child;
      }
    });

    return (
      <div className={_className} id={`${this.guid}-container`}>
        {_children}
      </div>
    );
  }
}
