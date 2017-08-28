import React from 'react'
import { element, func, node, oneOfType, string } from 'prop-types'
import classNames from 'classnames'

export default function contentFactory({ tip = false } = {}) {
  Content.propTypes = {
    As: oneOfType([element, func, node]),
    children: node.isRequired,
    className: string
  }

  Content.defaultProps = {
    As: 'div',
    className: ''
  }

  // eslint-disable-next-line
  function Content({ As = 'div', children, className, state: { type }, ...rest }) {
    // Bootstrap dropdowns content must be wrapped in an `dropdown-menu` class, other
    // toggled elements use <ELEMENT>-content
    className = classNames(className, {
      [`${type}-menu`]: type === 'dropdown',
      [`${type}-content`]: type !== 'dropdown'
    })

    return (
      <As className={className} {...rest}>
        {tip &&
          <div className="tip-container">
            <div className="tip" />
          </div>}
        {children}
      </As>
    )
  }

  return Content
}
