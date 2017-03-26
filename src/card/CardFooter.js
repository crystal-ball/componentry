import React, { PropTypes } from 'react';
import classnames from 'classnames';

const CardFooter = ({
  className,
  children,
  ...other
}) => {
  let _className = classnames('card-footer', className);

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

export default CardFooter;
