// @flow
import classNames from 'classnames'

import Button from '../Button/Button'
import elementFactory from '../component-factories/element-factory'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = ElementProps

/**
 * List group item of `li`, `a` or `Button`.
 */
export default elementFactory({
  name: 'ListGroup',
  computedTag: props => {
    if (props.href || props.onClick) return props.href ? 'a' : Button
    // Default to li if not specified or not an action type list
    return 'li'
  },
  computedClassName: (ctxClassName, propsClassName, { active, href, onClick }) =>
    classNames('list-group-item', ctxClassName, propsClassName, {
      active,
      'list-group-item-action': href || onClick,
    }),
})
