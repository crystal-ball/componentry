// @flow
import classNames from 'classnames'

import { BaseButton } from '../Button/Button'
import elementFactory from '../component-factories/element-factory'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = ElementProps

/**
 * List group item of `li`, `a` or `Button`.
 */
export default elementFactory({
  name: 'ListGroupItem',
  clean: ['active'],
  computedClassName: (ctxClassName, propsClassName, { active, href, onClick }) =>
    classNames('list-group-item', ctxClassName, propsClassName, {
      active,
      'list-group-item-action': href || onClick,
    }),
  computedTag: props => {
    // Use BaseButton for onClick elems to b/c we don't want .btn base classes
    if (props.href || props.onClick) return props.href ? 'a' : BaseButton
    // Default to li if not specified or not an action type list
    return 'li'
  },
})
