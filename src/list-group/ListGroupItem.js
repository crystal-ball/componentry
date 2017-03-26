import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { Button } from '../components';

export const ListGroupItem = ({
  children,
  className,
  href,
  onClick,
  tagName,
  ...other
}) => {
  let TagName, actionable, _className;
  if (tagName) {
    TagName = tagName;
  } else if (onClick) {
    TagName = Button;
    actionable = true;
  } else if (href) {
    TagName = 'a';
    actionable = true;
  } else {
    TagName = 'li';
  }

  _className = classNames('list-group-item', className, {
    'list-group-item-action': actionable
  });

  return (
    <TagName
      className={_className}
      href={href}
      onClick={onClick}
    >
      {children}
    </TagName>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  tagName: PropTypes.string
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  href: '',
  onClick: null,
  tagName: ''
};
