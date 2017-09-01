import React from 'react'
import { func, node, oneOfType, shape, string } from 'prop-types'
import classNames from 'classnames'

export default function contentFactory({ tip = false } = {}) {
  Content.propTypes = {
    As: oneOfType([func, node]),
    children: node,
    className: string,
    state: shape({
      type: string.isRequired
    }).isRequired
  }

  Content.defaultProps = {
    As: 'div',
    children: null,
    className: ''
  }

  function Content({ As, children, className, state, ...rest }) {
    return (
      <As className={classNames(`${state.type}-content`, className)} {...rest}>
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
