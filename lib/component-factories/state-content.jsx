// @flow
import React, { createElement } from 'react'
import type { Node, ComponentType } from 'react'
import classNames from 'classnames'

import cleanProps from '../utils/clean-props'

type Options = { element: string, tip?: boolean }

type Props = {
  as: ComponentType<any> | string,
  children: Node,
  className: string
}

/**
 * Rendering a content element
 * @param {*} param
 */
export default ({ element, tip = false }: Options = {}) => ({
  // $FlowFixMe
  as = 'div',
  children,
  className,
  ...rest
}: Props) =>
  createElement(
    as,
    {
      className: classNames(`${element}-content`, className),
      ...cleanProps(rest, ['active', 'activate', 'deactivate']),
      'data-test': `${element}-content`
    },
    tip && (
      <div className="tip-container">
        <div className="tip" />
      </div>
    ),
    children
  )
