import React from 'react'
import { func, node, string, oneOfType } from 'prop-types'
import classNames from 'classnames'

import cleanProps from '../clean-props'

/**
 * Factory function returns a FSC with the specified DOM element and base classes.
 * This should be used to create static subcomponents with defaulted class names.
 *
 * The `attrs` param is an escape hatch to pass any non-standard values.
 * @export
 * @param {config} [{ classes, tag='div', attrs }={}]
 * @returns {Component} React functional stateless component with base classes.
 */
export default function elementFactory({ classes, tag = 'div', attrs = {} } = {}) {
  Element.propTypes = {
    As: oneOfType([func, node]),
    children: node,
    className: string
  }

  Element.defaultProps = {
    As: null,
    children: null,
    className: null
  }

  function Element({ As, children, className, ...rest }) {
    // Props have precedence, use factory tag as default
    As = As || tag
    // Library wraps elemFactory in withState, which passes prop state
    rest = cleanProps(rest, ['state'])

    return (
      <As className={classNames(classes, className)} {...attrs} {...rest}>
        {children}
      </As>
    )
  }

  return Element
}
