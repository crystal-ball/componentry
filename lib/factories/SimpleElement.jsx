import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

/**
 * Factory function returns a FSC with the specified DOM element and base classes.
 * This should be used to create static subcomponents with defaulted class names.
 * @export
 * @param {config} [{ baseClasses, tagName='div' }={}]
 * @returns {Component} React functional stateless component with base classes.
 */
export default function({ baseClasses, tagName = 'div', arias } = {}) {
  SimpleElement.propTypes = {
    As: node,
    children: node,
    className: string
  }

  SimpleElement.defaultProps = {
    As: null,
    children: null,
    className: ''
  }

  if (arias) SimpleElement.ARIAS = arias

  function SimpleElement({ As, children, className, ...rest }) {
    As = As || tagName
    className = classNames(baseClasses, className)

    return (
      <As className={className} {...rest}>
        {children}
      </As>
    )
  }

  return SimpleElement
}
