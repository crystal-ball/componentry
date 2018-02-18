// @flow
import classNames from 'classnames'

import elementFactory from '../component-factories/element-factory'
import type { ThemeColors } from '../utils/theme'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = {
  /** Theme color used to compute BS color class */
  color?: ThemeColors | 'link' | '',
  /** Computes the button as anchor class */
  link?: boolean,
  /** Creates outline style button, uses `color` for outline theme. */
  outline?: boolean,
  /** Create a small or large style button */
  size?: 'small' | 'large',
} & ElementProps

/**
 * The library makes use of Buttons that should not have the base `.btn` class. It's
 * more explicit to specify this as a component type (and easier to debug/reason
 * about).
 * @param {boolean} decorated
 */
const makeButton = decorated => {
  const name = decorated ? 'Button' : 'BaseButton'

  return elementFactory({
    name,
    clean: ['color', 'link', 'outline', 'size'],
    tag: 'button',
    type: 'button',
    computedClassName: (
      ctxClassName,
      propsClassName,
      { color, link, outline, size },
    ) =>
      classNames(ctxClassName, propsClassName, {
        btn: decorated,
        'btn-anchor': link,
        // btn-<COLOR> class is only for regular themed buttons, suppress for other
        // btn theme flavors
        [`btn-${color}`]: color && !link && !outline,
        [`btn-outline-${color}`]: outline,
        'btn-sm': size === 'small',
        'btn-lg': size === 'large',
      }),
  })
}

const Button = makeButton(true)
const BaseButton = makeButton(false)

export { BaseButton }
export default Button
