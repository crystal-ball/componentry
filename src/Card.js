import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import pureElementFactory from './factories/pure-element-factory';

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
export default class Card extends Component {
  static Block = pureElementFactory({ className: 'card-block' })
  static Footer = pureElementFactory({ className: 'card-footer' })
  static Header = pureElementFactory({ className: 'card-header' })
  static Title = pureElementFactory({ className: 'card-title', As: 'h4' })

  static propTypes = {
    As: PropTypes.any,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    As: 'div',
    children: null,
    className: '',
  };

  render() {
    const {
      As='div',
      className='',
      children=null,
      ...other
    } = this.props;
    let _className = classnames('card', className);

    return (
      <As className={_className} {...other}>
        {children}
      </As>
    );
  }
}
