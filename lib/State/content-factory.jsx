import React from 'react'
import { func, node, oneOfType, shape, string } from 'prop-types'
import classNames from 'classnames'

export default function contentFactory({ tip = false } = {}) {
  Content.propTypes = {
    As: oneOfType([func, node]),
    children: node,
    className: string,
    activeContext: shape({
      element: string.isRequired
    }).isRequired
  }

  Content.defaultProps = {
    As: 'div'
  }

  function Content({ As, children, className, activeContext, ...rest }) {
    return (
      <As
        className={classNames(`${activeContext.element}-content`, className)}
        {...rest}
      >
        {tip && (
          <div className="tip-container">
            <div className="tip" />
          </div>
        )}
        {children}
      </As>
    )
  }

  return Content
}
