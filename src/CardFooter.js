import React, { PropTypes } from 'react';

export const CardFooter = ({
  className,
  children,
  ...other
}) => {
  let _className = className ? `card-footer ${className}` : 'card-footer';

  return (
    <div className={_className} {...other}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

CardFooter.defaultProps = {
  children: null,
  className: ''
};
