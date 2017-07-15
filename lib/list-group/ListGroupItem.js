import React from 'react';
import { any, func, node, string } from 'prop-types';

import Button from '../Button';
import classNames from '../utils/classnames';

ListGroupItem.propTypes = {
  As: any,
  children: node,
  className: string,
  href: string,
  onClick: func,
};

ListGroupItem.defaultProps = {
  As: null,
  children: null,
  className: '',
  href: null,
  onClick: null,
};

export default function ListGroupItem ({
  As,
  children,
  className,
  href,
  onClick,
  ...other
}) {
  className = classNames('list-group-item', className, {
    'list-group-item-action': href || onClick,
  });

  if (!As && (href || onClick)) {
    // If there isn't an As config and component has action, assign correct element
    As = href ? 'a' : Button;
  } else {
    // Fall back to configured As, or fallback fallback to <li>
    As = As || 'li';
  }

  return (
    <As className={className} href={href} onClick={onClick} {...other}>
      {children}
    </As>
  );
}
