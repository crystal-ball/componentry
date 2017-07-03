import React, { Component } from 'react';
import classnames from 'classnames';
import { any, bool, func, node, string } from 'prop-types';

import Button from './Button';
import arias from './HOCs/ariasHOC';

/**
 * Toggleable elements Trigger component.
 * @export
 * @class Trigger
 * @extends {Component}
 */
@arias
export default class Trigger extends Component {
  static ROLE = 'TRIGGER'

  static propTypes = {
    As: any,
    children: node,
    className: string,
    element: string,
    link: bool,
    toggleActive: func,
  }

  static defaultProps = {
    As: Button,
    children: null,
    className: '',
    element: '',
    link: null,
    toggleActive: () => {},
  }

  render() {
    let {
      As,
      children,
      className,
      element,
      link,
      toggleActive,
      ...other
    } = this.props;

    let mouseEnter = null;
    let mouseLeave = null;

    className = classnames(className, {
      [`${element}-trigger`]: element !== 'dropdown',
      [`${element}-toggle`]: element === 'dropdown',
    });

    // Set link defaults if it was not specified
    if (link === null) {
      link = element === 'drawer' || element === 'tooltip' ? true : false;
    }

    // Events for triggers that active on mouse enter/exit
    if (element === 'tooltip' || element === 'popover') {
      mouseEnter = toggleActive;
      mouseLeave = toggleActive;
    }

    return (
      <As
        className={className}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={toggleActive}
        link={link}
        {...other}
      >
        {children}
      </As>
    );
  }
}
