import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';

function classNamedHOC(Wrapped, { className: _className, As }) {
  ClassNamed.propTypes = {
    className: string,
  };

  ClassNamed.defaultProps = {
    className: '',
  };

  function ClassNamed({ className, ...other }) {
    return <Wrapped className={classnames(_className, className)} As={As} {...other} />;
  }

  return ClassNamed;
}

export default classNamedHOC;
