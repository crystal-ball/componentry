import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Button from '../Button';

const Target = ({
  active,
  children,
  className='',
  guid,
  toggleActive,
  ...other
}) => {
  let _className = classnames('dropdown-toggle', className);

  return (
    <Button
      aria-expanded={active ? 'true' : 'false'}
      className={_className}
      id={guid}
      onClick={toggleActive}
      {...other}
      aria-haspopup='true'
    >
      {children}
    </Button>
  );
};

Target.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  guid: PropTypes.string,
  toggleActive: PropTypes.func
};

Target.defaultProps = {
  active: false,
  children: null,
  className: '',
  guid: '',
  toggleActive: () => {}
};

Target.ROLE = 'TRIGGER';

export default Target;
