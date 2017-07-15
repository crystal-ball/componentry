import React from 'react';
import { any, node, string } from 'prop-types';

import classNames from '../utils/classnames';

export default function({ className, As }={}) {

  PureElement.propTypes = {
    As: any,
    children: node,
    className: string,
  };

  PureElement.defaultProps = {
    // This cannot have a default or the factory spec will get overriden even when a
    // value hasn't been explicitly passed into component invocation
    As: '',
    children: null,
    className: '',
  };

  function PureElement({
      As: _As,
      children,
      className: _className,
      ...other
  }={}) {
    As = _As || As || 'div'; // Invocation has priority, followed by factory definition
    className = classNames(className, _className);

    return (
      <As className={className} {...other}>
        {children}
      </As>
    );
  }

  return PureElement;
}
