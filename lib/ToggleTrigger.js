import React from 'react';
import { any, bool, func, node, string } from 'prop-types';

import Button from './Button';
import arias from './HOCs/ariasHOC';
import classNames from './utils/classnames';

/**
 * Toggleable elements Trigger component.
 * @export
 * @class Trigger
 * @extends {Component}
 */
let Trigger = function Trigger ({
  As,
  children,
  className,
  element,
  link,
  toggleActive,
  ...other
}) {
  let mouseEnter = null;
  let mouseLeave = null;

  className = classNames(className, {
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
};

Trigger.ROLE = 'TRIGGER';

Trigger.propTypes = {
  As: any,
  children: node,
  className: string,
  element: string,
  link: bool,
  toggleActive: func,
};

Trigger.defaultProps = {
  As: Button,
  children: null,
  className: '',
  element: '',
  link: null,
  toggleActive: () => {},
};

Trigger = arias(Trigger);

export default Trigger;
