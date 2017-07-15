import React, { Component } from 'react';
import { any, node, string } from 'prop-types';

import pureElementFactory from './factories/pure-element-factory';
import classNames from './utils/classnames';

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
export default class Card extends Component {
  static Block = pureElementFactory({ baseClasses: 'card-block' })
  static Footer = pureElementFactory({ baseClasses: 'card-footer' })
  static Header = pureElementFactory({ baseClasses: 'card-header' })
  static Title = pureElementFactory({ baseClasses: 'card-title', As: 'h4' })

  static propTypes = {
    As: any,
    children: node,
    className: string,
  };

  static defaultProps = {
    As: 'div',
    children: null,
    className: '',
  };

  render() {
    let {
      As,
      className,
      children,
      ...other
    } = this.props;
    className = classNames('card', className);

    return (
      <As className={className} {...other}>
        {children}
      </As>
    );
  }
}
