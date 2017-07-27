import React from 'react';
import { node, string } from 'prop-types';

import pureElementFactory from './factories/pure-element-factory';
import classNames from './utils/classnames';

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
function Card({ As, className, children, ...other }) {
  className = classNames('card', className);

  return (
    <As className={className} {...other}>
      {children}
    </As>
  );
}

Card.Block = pureElementFactory({ baseClasses: 'card-block' });
Card.Footer = pureElementFactory({ baseClasses: 'card-footer' });
Card.Header = pureElementFactory({ baseClasses: 'card-header' });
Card.Title = pureElementFactory({ baseClasses: 'card-title', As: 'h4' });

Card.propTypes = {
  As: node,
  children: node,
  className: string
};

Card.defaultProps = {
  As: 'div',
  children: null,
  className: ''
};

export default Card;
