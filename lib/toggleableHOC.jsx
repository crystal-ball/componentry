import React, { Children, cloneElement } from 'react';
import { bool, element, func, node, oneOfType, string } from 'prop-types';

import ToggleContent from './ToggleContent';
import ToggleTrigger from './ToggleTrigger';
import classNames from './utils/classnames';
import getDisplayName from './utils/getDisplayName';
import cleanProps from './utils/clean-props';

let count = 0;

/**
 * Inverse Inheritance decorator for creating toggle-able elements. Use with a class
 * with a `toggleActive` method that can be called on `active` change.
 *
 * @export
 * @param {any} [{ contentArias, elementType, triggerArias }={}]
 * @returns {Component} Toggle-able element
 */
const ToggleableHOCFactory = (
  { contentArias, elementType, triggerArias } = {}
) => Wrapped =>
  class Toggleable extends Wrapped {
    static displayName = `toggleableHOC(${getDisplayName(Wrapped)})`;

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

    // Create a unique id for component that can be passed to trigger and menu
    // for binding aria attrs
    // NOTE: this won't work in server rendered apps 😣
    guid = `${elementType}-${(count += 1)}`;

    // If active is not passed as a prop, internal state is used for uncontrolled
    // drawer
    state = { active: false };

    renderChildren(children, active) {
      const { guid, toggleActive } = this;
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
      const { guid, toggleActive } = this;
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
  };

export default ToggleableHOCFactory;
