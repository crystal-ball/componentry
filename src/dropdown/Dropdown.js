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
    this.guid = 'dropdown-' + count++;
  }

  state = {
    active: false
  }

  _listenerHandler = e => {
    // Check if the click was inside the dropdown
    let clickInDropdown = $(e.target).closest(`#${this.guid}-container`).length ? true : false;

    // If the click was ouside dropdown, close the dropdown and then cleanup the listener
    if (!clickInDropdown) {
      this.toggleActive();
    }
  }

  toggleActive = () => {
    const active = this.state.active;

    if (!active) {
      // If the dropdown is closed, it's opening, setup click event listener
      $('body').on('mouseup', this._listenerHandler);
      $('body').on('touchend', this._listenerHandler);
    } else {
      $('body').off('mouseup', this._listenerHandler);
      $('body').off('touchend', this._listenerHandler);
    }

    this.setState({ active: !this.state.active });
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
