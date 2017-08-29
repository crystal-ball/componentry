import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

/**
 * Factory function returns a FSC with the specified DOM element and base classes.
 * This should be used to create static subcomponents with defaulted class names.
 * @export
 * @param {config} [{ className, tagName='div' }={}]
 * @returns {Component} React functional stateless component with base classes.
 */
export default function elementFactory(
  { className: baseClassName = '', tagName = 'div' } = {}
) {
  Element.propTypes = {
    As: node,
    children: node,
    className: string
  }

  Element.defaultProps = {
    As: null,
    children: null,
    className: ''
  }

  // By default use tagName for component element
  function Element({ As = tagName, children, className, ...rest }) {
    // props have precedence
    As = As || tagName
    // Or null prevents empty `class` for elements without base or passed classes
    className = classNames(baseClassName, className) || null

    return (
      <As className={className} {...rest}>
        {children}
      </As>
    )
  }

  return Element
}
