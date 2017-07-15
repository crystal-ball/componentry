import React, { Children, cloneElement } from 'react';
import { any, bool, func, node, string } from 'prop-types';

import ToggleContent from '../ToggleContent';
import ToggleTrigger from '../ToggleTrigger';
import classNames from '../utils/classnames';
import getDisplayName from '../utils/getDisplayName';
import cleanProps from '../utils/clean-props';

let count = 0;

/**
 * Inverse Inheritance decorator for creating toggle-able elements. Use with a class
 * with a `toggleActive` method that can be called on `active` change.
 *
 * @export
 * @param {any} [{ contentArias, element, triggerArias }={}]
 * @returns {Component} Toggle-able element
 */
export default function ToggleableHOCFactory({ contentArias, element, triggerArias }={}) {
  return function ToggleableHOC(WrappedComponent) {
    return class Container extends WrappedComponent {
      static displayName = `HOC(${getDisplayName(WrappedComponent)})`

      static propTypes = {
        As: any,
        Content: string,
        Trigger: string,
        active: bool,
        children: node,
        className: string,
        onActivate: func,
        onActivated: func,
        onDeactivate: func,
        onDeactivated: func,
      }

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
        onDeactivated() {},
      }

      constructor(props) {
        super(props);
        // Create a unique id for component that can be passed to trigger and menu
        // for binding aria attrs
        // NOTE: this won't work in server rendered apps 😣
        this.guid = `${element}-${count++}`;
      }

      // If active is not passed as a prop, internal state is used for uncontrolled
      // drawer
      state = { active: false }

      // TODO: IS THIS NEEDED?
      // toggleActive = e => {}

      renderChildren(children, active) {
        const { guid, toggleActive } = this;
        // Find TRIGGER and CONTENT children and clone with needed props
        return Children.map(children, child => {
          if (child.type && child.type.ROLE === 'TRIGGER') {
            return cloneElement(child, { active, arias: triggerArias, element, guid, toggleActive });
          } else if (child.type && child.type.ROLE === 'CONTENT') {
            return cloneElement(child, { active, arias: contentArias, element, guid });
          } else {
            return child;
          }
        });
      }

      render() {
        let {
          As='div',
          Content,
          Trigger,
          active,
          children,
          className,
          ...other
        } = this.props;
        const { guid, toggleActive } = this;
        const { ...dom } = cleanProps(other, ['onActivate', 'onActivate', 'onDeactivate', 'onDeactivate']);

        className = classNames(className, {
          [element]: element === 'dropdown',
          [`${this.guid}-container`]: element === 'dropdown',
          [`${element}-container`]: element !== 'dropdown',
        });

        // Default active to controlled prop, if undefined then element is being used as
        // uncontrolled and we fall back to internal state tracking
        if (active === undefined) { active = this.state.active; }

        return (
          <As className={className} {...dom}>
            {Trigger &&
              <ToggleTrigger
                active={active}
                arias={triggerArias}
                element={element}
                guid={guid}
                toggleActive={toggleActive}
              >
                {Trigger}
              </ToggleTrigger>
            }
            {this.renderChildren(children, active)}
            {Content &&
              <ToggleContent
                active={active}
                arias={contentArias}
                element={element}
                guid={guid}
              >
                {Content}
              </ToggleContent>
            }
          </As>
        );
      }
    };
  };
}
