import React, { Component, PropTypes } from 'react';

import { CardBlock } from './CardBlock';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 * @type {[type]}
 */
export const Card = class Card extends Component {

  static Block = CardBlock
  static Header = CardHeader
  static Footer = CardFooter

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;
    let _className = className ? `card ${className}` : 'card';

    return (
      <div className={_className} {...other}>
        {children}
      </div>
    );
  }
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Card.defaultProps = {
  children: null,
  className: ''
};
