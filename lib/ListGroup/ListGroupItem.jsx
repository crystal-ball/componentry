// @flow
/* eslint-disable no-param-reassign */
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import classNames from 'classnames'

import Button from '../Button'

/**
 * List group item of `li`, `a` or `Button`.
 */

type Props = {
  as?: ComponentType<any> | string,
  active?: boolean,
  children?: Node,
  className?: string
}

export default ({ as, active, children, className, ...rest }: Props) => {
  // $FlowFixMe
  const { href, onClick } = rest
  if (href || onClick) as = href ? 'a' : Button // override for action elements

  return createElement(
    // Default to li if not specified or not an action type list
    as || 'li',
    {
      className: classNames('list-group-item', className, {
        active,
        'list-group-item-action': href || onClick
      }),
      ...rest
    },
    children
  )
}
