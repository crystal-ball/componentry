import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  tagName: PropTypes.string,
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  href: null,
  onClick: null,
  tagName: '',
};

function ListGroupItem ({
  children,
  className,
  href,
  onClick,
  tagName,
  ...other
}) {
  let TagName, actionable, _className;
  let elementProps = { ...other, onClick };
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

  _className = classNames('list-group-item', className, {
    'list-group-item-action': actionable,
  });

  return (
    <TagName {...elementProps} className={_className} >
      {children}
    </TagName>
  );
}

export default ListGroupItem;
