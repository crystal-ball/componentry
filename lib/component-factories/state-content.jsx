import React from 'react'
import { func, node, string, oneOfType } from 'prop-types'
import classNames from 'classnames'

import cleanProps from '../utils/clean-props'

/**
 * Rendering a content element
 * @param {*} param
 */
const contentElementFactory = ({ element, tip = false } = {}) => {
  Content.propTypes = {
    As: oneOfType([func, node]),
    children: node,
    className: string
  }

  Content.defaultProps = {
    As: 'div'
  }

  function Content({ As, children, className, ...rest }) {
    // Remove context props
    const dom = cleanProps(rest, ['active', 'activate', 'deactivate'])
    const name = `${element}-content`
    return (
      <As className={classNames(name, className)} data-test={name} {...dom}>
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

export default contentElementFactory
