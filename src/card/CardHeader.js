import React from 'react';
import PropTypes from 'prop-types';
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
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  children: null,
  className: '',
};

export default CardHeader;
