import React from 'react';
import { bool, element, func, node, oneOfType, string } from 'prop-types';

import Button from './Button';
import arias from './ariasHOC';
import classNames from './utils/classnames';

/**
 * Toggleable elements Trigger component.
 * @export
 * @class Trigger
 * @extends {Component}
 */
function Trigger({
  As,
  children,
  className,
  elementType,
  link,
  toggleActive,
  ...other
}) {
  let mouseEnter = null;
  let mouseLeave = null;

  className = classNames(className, {
    [`${elementType}-trigger`]: elementType !== 'dropdown',
    [`${elementType}-toggle`]: elementType === 'dropdown'
  });

  // Set link defaults if it was not specified
  if (link === null) {
    link = !!(elementType === 'drawer' || elementType === 'tooltip');
  }

  // Events for triggers that active on mouse enter/exit
  if (elementType === 'tooltip' || elementType === 'popover') {
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

Trigger.ROLE = 'TRIGGER';

Trigger.propTypes = {
  As: oneOfType([element, func, node]),
  children: node,
  className: string,
  elementType: string,
  link: bool,
  toggleActive: func
};

Trigger.defaultProps = {
  As: Button,
  children: null,
  className: '',
  elementType: '',
  link: null,
  toggleActive: () => {}
};

export default arias(Trigger);
