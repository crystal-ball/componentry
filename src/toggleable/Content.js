import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Content = ({
  As='div',
  active=false,
  arias={},
  children=null,
  className='',
  element,
  guid='',
  ...other
}) => {
  let hasTip;
  let _className = classnames(className, {
    [`${element}-menu`]: element === 'dropdown',
    [`${element}-content`]: element !== 'dropdown',
  });

  if (element === 'tooltip') {
    hasTip = <div className='tip' />;
  }

  if (element === 'popover') {
    hasTip = <div className='tip-container'><div className='tip' /></div>;
  }

  return (
    <As
      aria-hidden={active ? 'false' : 'true'}
      aria-labelledby={arias.labelledby ? guid : null}
      className={_className}
      id={arias.id ? guid : null}
      role={arias.role ? arias.role : null}
      {...other}
    >
      {hasTip ? hasTip : null}
      {children}
    </As>
  );
};

Content.propTypes = {
  As: PropTypes.any,
  active: PropTypes.bool,
  arias: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.string,
  guid: PropTypes.string,
};

Content.defaultProps = {
  As: 'div',
  active: false,
  arias: {},
  children: null,
  className: '',
  element: '',
  guid: '',
};

Content.ROLE = 'CONTENT';

export default Content;
