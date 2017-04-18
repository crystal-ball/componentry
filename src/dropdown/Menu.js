import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Menu = ({
  active,
  children,
  className='',
  guid,
  ...other
}) => {
  let _className = classnames('dropdown-menu', className);

  return (
    <div
      aria-hidden={active ? 'false' : 'true'}
      aria-labelledby={guid}
      className={_className}
      {...other}
    >
      {children}
    </div>
  );
};

Menu.propTypes = {
  active: PropTypes. bool,
  children: PropTypes.node,
  className: PropTypes.string,
  guid: PropTypes.string
};

Menu.defaultProps = {
  active: false,
  children: null,
  className: '',
  guid: ''
};

Menu.ROLE = 'MENU';

export default Menu;
