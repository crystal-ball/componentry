import React from 'react';
import { node, string } from 'prop-types';

import SimpleElement from './factories/SimpleElement';
import classNames from './utils/classnames';

/**
 * Card component is a simple wrapper for creating markup for card elements. Includes:
 * - `Card.Block`
 * - `Card.Header`
 * - `Card.Footer`
 */
export default function Card({ As, className, children, ...other }) {
  className = classNames('card', className);

  return (
    <As className={className} {...other}>
      {children}
    </As>
  );
}

Card.Block = SimpleElement({ baseClasses: 'card-block' });
Card.Footer = SimpleElement({ baseClasses: 'card-footer' });
Card.Header = SimpleElement({ baseClasses: 'card-header' });
Card.Title = SimpleElement({ baseClasses: 'card-title', As: 'h4' });

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
