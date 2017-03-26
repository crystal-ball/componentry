import React, { PropTypes } from 'react';
import classnames from 'classnames';

const CardHeader = ({
  className,
  children,
  ...other
}) => {
  let _className = classnames('card-header', className);

  return (
    <div className={_className} {...other}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

CardHeader.defaultProps = {
  children: null,
  className: ''
};

export default CardHeader;
