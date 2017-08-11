/* eslint-disable react/prop-types */
import { Component } from 'react';

import toggleable from './toggleableHOC';
import ToggleContent from './ToggleContent';
import ToggleTrigger from './ToggleTrigger';
import { closest } from './utils/dom';

/**
 * The `<Dropdown>` element creates a menu.
 *
 * TODO:
 * - Menu Items with class names 'dropdown-item'
 * - Default focus on open first item
 * - Keydown listener for arrows to navigate through menu items
 */
class Dropdown extends Component {
  static Content = ToggleContent;
  static Trigger = ToggleTrigger;

  clickHandler = e => {
    // If the click was ouside dropdown, close the dropdown and then cleanup the listener
    if (!closest(e.target, `${this.guid}-container`)) {
      this.toggleActive();
    }
  };

  keyHandler = e => {
    // Escape key is which 27, when escape key is hit, toggle state
    if (e.which === 27) {
      this.toggleActive();
    }
  };

  toggleActive = e => {
    const { onActivate, onActivated, onDeactivate, onDeactivated } = this.props;
    let { active } = this.props;
    if (active === undefined) {
      active = this.state.active;
    }

    if (!active) {
      // If the dropdown is closed, it's now opening, so setup event listeners
      onActivate(this, e); // Consumer hooks
      document.addEventListener('mouseup', this.clickHandler);
      document.addEventListener('touchend', this.clickHandler);
      document.addEventListener('keydown', this.keyHandler);
    } else {
      // If the dropdown is open, it's now closing, so remove event listeners
      onDeactivate(this, e); // Consumer hooks
      document.removeEventListener('mouseup', this.clickHandler);
      document.removeEventListener('touchend', this.clickHandler);
      document.removeEventListener('keydown', this.keyHandler);
    }

    if (this.props.active === undefined) {
      // State is not controlled, update internal state
      this.setState({ active: !active });
    }

    if (!active) {
      // If the dropdown is closed, it's now opening, so setup event listeners
      onActivated(this, e); // Consumer hooks
    } else {
      // If the dropdown is open, it's now closing, so remove event listeners
      onDeactivated(this, e); // Consumer hooks
    }
  };
}

export default toggleable({
  contentArias: { labelledby: true, hidden: true },
  elementType: 'dropdown',
  triggerArias: { expanded: true, haspopup: true, id: true }
})(Dropdown);
