import React from 'react';
import { node, string } from 'prop-types';

import classNames from '../utils/classnames';

/**
 * Factory function returns a FSC with the specified DOM element and base classes.
 * This should be used to create static subcomponents with defaulted class names.
 * @export
 * @param {config} [{ baseClasses, tagName='div' }={}]
 * @returns {Component} React functional stateless component with base classes.
 */
export default function({ baseClasses, tagName = 'div', id } = {}) {
  function SimpleElement({ As, children, className, ...other }) {
    As = As || tagName;
    className = classNames(baseClasses, className);

    return (
      <As className={className} id={id} {...other}>
        {children}
      </As>
    );
  }

  SimpleElement.propTypes = {
    As: node,
    children: node,
    className: string
  };

  SimpleElement.defaultProps = {
    As: null,
    children: null,
    className: ''
  };

  return SimpleElement;
}
