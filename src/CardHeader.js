import React, { PropTypes } from 'react';

export const CardHeader = ({
  className,
  children,
  ...other
}) => {
  let _className = className ? `card-header ${className}` : 'card-header';

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
