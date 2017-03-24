import React, { PropTypes } from 'react';

export const CardBlock = ({
  className,
  children,
  ...other
}) => {
  let _className = className ? `card-block ${className}` : 'card-block';

  return (
    <div className={_className} {...other}>
      {children}
    </div>
  );
};

CardBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

CardBlock.defaultProps = {
  children: null,
  className: ''
};
