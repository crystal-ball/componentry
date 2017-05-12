import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Trigger from './Trigger';
import Content from './Content';

/**
 * Factory for generating toggleable container components. Returns a class with a
 * default proptypes, state tracking, and render method.
 *
 * Pass element name to generate class names.
 *
 * Include `contentArias` and `triggerArias` in extended class to control aria attrs
 * used by subcomponents.
 */
export default function generateContainer(element='') {
  let count = 0;

  /**
   * Class Container should be used as base class for any toggleable component.
   */
  return class Container extends Component {
    static Trigger = Trigger;
    static Content = Content;

    static propTypes = {
      As: PropTypes.any,
      Content: PropTypes.string,
      Trigger: PropTypes.string,
      active: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      onActivate: PropTypes.func,
      onActivated: PropTypes.func,
      onDeactivate: PropTypes.func,
      onDeactivated: PropTypes.func,
    }

    static defaultProps = {
      As: 'div',
      Content: '',
      Trigger: '',
      active: undefined,
      children: null,
      className: '',
      onActivate: () => {},
      onActivated: () => {},
      onDeactivate: () => {},
      onDeactivated: () => {},
    }

    constructor(props) {
      super(props);
      // Create a unique id for component that can be passed to trigger and menu for
      // binding aria attrs
      // NOTE: this won't work in server rendered apps 😣
      this.guid = `${element}-${count++}`;
    }

    // If active is not passed as a prop, internal state is used for uncontrolled
    // drawer
    state = { active: false }

    toggleActive = e => {}

    render() {
      let {
        As,
        Content: _Content,
        Trigger: _Trigger,
        active,
        children,
        className,
        onActivate, // eslint-disable-line
        onActivated, // eslint-disable-line
        onDeactivate, // eslint-disable-line
        onDeactivated, // eslint-disable-line
        ...other
      } = this.props;
      const { guid, toggleActive, contentArias, triggerArias } = this;
      const _className = classnames(className, {
        [element]: element === 'dropdown',
        [`${this.guid}-container`]: element === 'dropdown',
        [`${element}-container`]: element !== 'dropdown',
      });

      // Default active to controlled prop, if undefined then element is being used as
      // uncontrolled and we fall back to internal state tracking
      if (active === undefined) {
        active = this.state.active;
      }

      // Find TRIGGER and CONTENT children and clone with needed props
      let _children = Children.map(children, child => {
        if (!child.type) {
          return child;
        } else if (child.type.ROLE === 'TRIGGER') {
          return cloneElement(child, { active, arias: triggerArias, element, guid, toggleActive });
        } else if (child.type.ROLE === 'CONTENT') {
          return cloneElement(child, { active, arias: contentArias, element, guid });
        } else {
          return child;
        }
      });

      return (
        <As className={_className} {...other}>
          {_Trigger ?
            <Trigger
              active={active}
              arias={triggerArias}
              element={element}
              guid={guid}
              toggleActive={toggleActive}
            >
              {_Trigger}
            </Trigger>
            : null}
          {_children}
          {_Content ?
            <Content
              active={active}
              arias={contentArias}
              element={element}
              guid={guid}
            >
              {_Content}
            </Content>
            : null}
        </As>
      );
    }
  };
}
