// @flow
import classNames from 'classnames'

import { BaseButton } from '../Button/Button'
import elementFactory from '../component-factories/element-factory'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = ElementProps

/**
 * Return a component that can be used as an item.
 */
export default ({ name, defaultClasses, triggerClass }) =>
  elementFactory({
    name,
    clean: ['active'],
    computedClassName: (ctxClassName, propsClassName, { active, href, onClick }) =>
      classNames(defaultClasses, ctxClassName, propsClassName, {
        active,
        [triggerClass]: href || onClick,
      }),
    computedTag: ({ href, onClick }) => {
      // Use BaseButton for onClick elems to b/c we don't want .btn base classes
      if (href || onClick) return href ? 'a' : BaseButton
      // Default to li if not specified or not an action type list
      return 'li'
    },
  })
