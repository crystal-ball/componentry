import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';

const Trigger = ({
  As=Button,
  active=false,
  arias={},
  children=null,
  className='',
  element='',
  guid='',
  link=null,
  toggleActive=()=>{},
  ...other
}) => {
  let expanded = active ? 'true' : 'false';
  let _className = classnames(className, {
    [`${element}-trigger`]: element !== 'dropdown',
    [`${element}-toggle`]: element === 'dropdown',
  });

  // If link was not specified, then it is default true for drawers only
  if (link === null) {
    link = element === 'drawer' ? true : false;
  }

  return (
    <As
      aria-controls={arias.controls ? guid : null}
      aria-expanded={arias.expanded ? expanded : null}
      aria-haspopup={arias.haspopup ? 'true' : null}
      className={_className}
      id={arias.id ? guid : null}
      onClick={toggleActive}
      link={link}
      {...other}
    >
      {children}
    </As>
  );
};

Trigger.propTypes = {
  As: PropTypes.any,
  active: PropTypes.bool,
  arias: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.string,
  guid: PropTypes.string,
  link: PropTypes.bool,
  toggleActive: PropTypes.func,
};

Trigger.defaultProps = {
  As: Button,
  active: false,
  arias: {},
  children: null,
  className: '',
  element: '',
  guid: '',
  link: null,
  toggleActive: () => {},
};

Trigger.ROLE = 'TRIGGER';

export default Trigger;
