import React, { PropTypes } from 'react';
import classnames from 'classnames';

const CardBlock = ({
  className,
  children,
  ...other
}) => {
  let _className = classnames('card-block', className);

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

export default CardBlock;
