import React from 'react';
import { node, string } from 'prop-types';

import classNames from '../utils/classnames';

/**
 * Component factory that returns a component with the specified DOM element and base
 * classes. This should be used to create subcomponents with required default class
 * names.
 *
 * @export
 * @param {config} [{ baseClasses, tagName='div' }={}]
 * @returns {Component} React functional stateless component with base classes.
 */
export default function({ baseClasses, tagName = 'div', id } = {}) {
  function PureElement({ As, children, className, ...other }) {
    As = As || tagName;
    className = classNames(baseClasses, className);

    return (
      <As className={className} id={id} {...other}>
        {children}
      </As>
    );
  }

  PureElement.propTypes = {
    As: node,
    children: node,
    className: string
  };

  PureElement.defaultProps = {
    As: null,
    children: null,
    className: ''
  };

  return PureElement;
}
