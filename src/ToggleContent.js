import React, { Component } from 'react';
import classnames from 'classnames';
import { any, node, string } from 'prop-types';
import arias from './HOCs/ariasHOC';

/**
 * Toggleable elements Content component.
 * @export
 * @class Content
 * @extends {Component}
 */
@arias
export default class Content extends Component {
  static ROLE = 'CONTENT'

  static propTypes = {
    As: any,
    children: node,
    className: string,
    element: string,
  }

  static defaultProps = {
    As: 'div',
    children: null,
    className: '',
    element: '',
  }

  renderTip(element) {
    if (element === 'tooltip' || element === 'popover') {
      return <div className='tip-container'><div className='tip' /></div>;
     } else {
       return null;
     }
  }

  render() {
    let {
      As,
      children,
      className,
      element,
      ...other
    } = this.props;

    // Bootstrap dropdowns content must be wrapped in an `dropdown-menu` class, other
    // toggled elements use <ELEMENT>-content
    className = classnames(className, {
      [`${element}-menu`]: element === 'dropdown',
      [`${element}-content`]: element !== 'dropdown',
    });

    return (
      <As className={className} {...other}>
        {this.renderTip(element)}
        {children}
      </As>
    );
  }
}
