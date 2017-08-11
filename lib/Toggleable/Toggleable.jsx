import React, { Children, Component, cloneElement } from 'react';
import { bool, element, func, node, oneOfType, string } from 'prop-types';

import ToggleContent from './ToggleContent';
import ToggleTrigger from './ToggleTrigger';
import classNames from '../utils/classnames';
import cleanProps from '../utils/clean-props';
import { closest, getTextWidth } from '../utils/dom';

let count = 0;

/**
 * Inverse Inheritance decorator for creating toggle-able elements. Use with a class
 * with a `toggleActive` method that can be called on `active` change.
 *
 * @export
 * @param {any} [{ contentArias, elementType, triggerArias }={}]
 * @returns {Component} Toggle-able element
 */
export default class Toggleable extends Component {
  static Content = ToggleContent;
  static Trigger = ToggleTrigger;

  static propTypes = {
    As: oneOfType([element, func, node]),
    Content: string,
    Trigger: string,
    active: bool,
    children: node,
    className: string,
    onActivate: func,
    onActivated: func,
    onDeactivate: func,
    onDeactivated: func
  };

  static defaultProps = {
    As: 'div',
    Content: '',
    Trigger: '',
    active: undefined,
    children: null,
    className: '',
    onActivate() {},
    onActivated() {},
    onDeactivate() {},
    onDeactivated() {}
  };

  // If active is not passed as a prop, internal state is used for uncontrolled
  // drawer
  state = { active: false };

  // Create a unique id for component that can be passed to trigger and menu
  // for binding aria attrs
  // NOTE: this won't work in server rendered apps 😣
  guid = `${this.elementType}-${(count += 1)}`;

  /**
   * Internal cache for width of tooltip content. Set after calculating content
   * width and reused on subsequent renders if content text has not changed.
   */
  contentWidth = null;

  /**
   * Internal cache for tooltip content. Used to check if the content has changed
   * between showings of tooltip.
   */
  content = null;

  // The element type, arias and toggleActive properties can be extended to
  // customize the Toggleable element.
  elementType = 'toggleable'; // Type of element, customizes display
  contentArias = {}; // Aria attrs required by content subcomponent
  triggerArias = {}; // Aria attrs required by trigger subcomponent

  // Methods
  // ---------------------------------------------------------------------------
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
    const { elementType } = this;
    let { active } = this.props;
    // Handle uncontrolled drawer
    if (active === undefined) {
      active = this.state.active;
    }

    if (!active) {
      onActivate(this, e);

      // ========================================================
      // Handle Toggle Active for Dropdowns and Tooltips
      // ========================================================
      if (elementType === 'dropdown') {
        // If the dropdown is closed, it's now opening, so setup event listeners
        document.addEventListener('mouseup', this.clickHandler);
        document.addEventListener('touchend', this.clickHandler);
        document.addEventListener('keydown', this.keyHandler);
      }

      if (elementType === 'tooltip' || elementType === 'popover') {
        // Position absolute tooltip is constrained by the parent width. Set tooltip
        // width to content width to overflow parent bounds
        const contentElement = document.getElementById(this.guid);
        const content = contentElement.innerText;
        this.content = content;

        if (content === this.content && this.contentWidth) {
          // If width has already been calculated and content has not changed, use
          // cached width for performance
          contentElement.style.width = `${this.contentWidth}px`;
        } else {
          // Get all styles of content element, set width and cache
          const styles = window.getComputedStyle(contentElement);
          // Get padding, font size and font family of content
          const width =
            getTextWidth(content, `${styles.fontSize} ${styles.fontFamily}`) +
            parseFloat(styles.paddingLeft) +
            parseFloat(styles.paddingRight) +
            1;

          contentElement.style.width = `${width}px`;
          this.contentWidth = width;
        }
      }
    } else {
      onDeactivate(this, e);

      if (elementType === 'dropdown') {
        // If the dropdown is open, it's now closing, so remove event listeners
        document.removeEventListener('mouseup', this.clickHandler);
        document.removeEventListener('touchend', this.clickHandler);
        document.removeEventListener('keydown', this.keyHandler);
      }
    }

    if (this.props.active === undefined) {
      // Element is uncontrolled, update internal state
      // TODO: use callback version of setState for activated/deactivated
      this.setState({ active: !active });
    }

    if (!active) {
      onActivated(this, e);
    } else {
      onDeactivated(this, e);
    }
  };

  renderChildren(children, active) {
    const { contentArias, elementType, guid, toggleActive, triggerArias } = this;
    // Find TRIGGER and CONTENT children and clone with needed props
    return Children.map(children, child => {
      if (child.type && child.type.ROLE === 'TRIGGER') {
        return cloneElement(child, {
          active,
          arias: triggerArias,
          elementType,
          guid,
          toggleActive
        });
      } else if (child.type && child.type.ROLE === 'CONTENT') {
        return cloneElement(child, {
          active,
          arias: contentArias,
          elementType,
          guid
        });
      }

      return child;
    });
  }

  render() {
    const { As = 'div', Content, Trigger, children, ...other } = this.props;
    let { active, className } = this.props;
    const { contentArias, elementType, guid, toggleActive, triggerArias } = this;
    const { ...dom } = cleanProps(other, [
      'active',
      'className',
      'onActivate',
      'onActivated',
      'onDeactivate',
      'onDeactivated'
    ]);

    className = classNames(className, {
      [elementType]: elementType === 'dropdown',
      [`${this.guid}-container`]: elementType === 'dropdown',
      [`${elementType}-container`]: elementType !== 'dropdown'
    });

    // Default active to controlled prop, if undefined then element is being used as
    // uncontrolled and we fall back to internal state tracking
    if (active === undefined) {
      active = this.state.active;
    }

    return (
      <As className={className} {...dom}>
        {Trigger &&
          <ToggleTrigger
            active={active}
            arias={triggerArias}
            elementType={elementType}
            guid={guid}
            toggleActive={toggleActive}
          >
            {Trigger}
          </ToggleTrigger>}
        {this.renderChildren(children, active)}
        {Content &&
          <ToggleContent
            active={active}
            arias={contentArias}
            elementType={elementType}
            guid={guid}
          >
            {Content}
          </ToggleContent>}
      </As>
    );
  }
}
