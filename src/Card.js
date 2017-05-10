import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Create Named Components
import generateNamed from './generate-named';
const Block = generateNamed({ name: 'card-block' });
const Footer = generateNamed({ name: 'card-footer' });
const Header = generateNamed({ name: 'card-header' });

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
export default class Card extends Component {
  static Block = Block
  static Header = Header
  static Footer = Footer

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

Card.propTypes = {
  As: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  As: 'div',
  children: null,
  className: '',
};
