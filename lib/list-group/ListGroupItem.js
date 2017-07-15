import React from 'react';
import { func, node, string } from 'prop-types';

import Button from '../Button';
import classNames from '../utils/classnames';

ListGroupItem.propTypes = {
  children: node,
  className: string,
  href: string,
  onClick: func,
  tagName: string,
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  href: null,
  onClick: null,
  tagName: '',
};

export default function ListGroupItem ({
  children,
  className,
  href,
  onClick,
  tagName,
  ...other
}) {
  let TagName, actionable;
  let elementProps = { ...other, onClick }; // TODO is there a better way to handle this?

  if (tagName) {
    TagName = tagName;
  } else if (onClick) {
    TagName = Button;
    actionable = true;
    elementProps.btnClass = false;
  } else if (href) {
    TagName = 'a';
    actionable = true;
    elementProps.href = href;
  } else {
    TagName = 'li';
  }

  className = classNames('list-group-item', className, {
    'list-group-item-action': actionable,
  });

  return (
    <TagName {...elementProps} className={className} >
      {children}
    </TagName>
  );
}
