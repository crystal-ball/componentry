// @flow
import classNames from 'classnames'

import elementFactory from '../component-factories/element-factory'
import type { ThemeColors } from '../utils/theme'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = {
  /**
   * Theme color for button, used to create themed buttons and themed outline
   * buttons. A default value for color is passed from the `ThemeProvider` as
   * `defaultButtonColor` and is used with any button without a passed value for
   * color.
   *
   * If a button is not passed a theme color, it will default to the
   * `defaultButtonColor` value that can be set in the THEME context (it is
   * `'primary'` by default). If you need a button that is not a `link` and not a
   * themed button, pass an empty string to suppress both classes.
   */
  color?: ThemeColors | 'link' | '',
  /**
   * A++ Accessibility: Creates a button that looks exactly like an anchor. This
   * should be used for any action trigger in an application that is not a routing
   * event.
   */
  link?: boolean,
  /**
   * Creates outline style button, uses `color` for outline theme.
   */
  outline?: boolean,
  /**
   * Create a small or large style button
   */
  size?: 'small' | 'large',
} & ElementProps

export default elementFactory({
  name: 'Button',
  clean: ['color', 'link', 'outline', 'size'],
  tag: 'button',
  type: 'button',
  computedClassName: (
    ctxClassName,
    propsClassName,
    { link, color, outline, size },
  ) =>
    classNames('btn', ctxClassName, propsClassName, {
      'btn-anchor': link,
      // btn-<COLOR> class is only for regular themed buttons, suppress for other
      // btn theme flavors
      [`btn-${color}`]: color && !link && !outline,
      [`btn-outline-${color}`]: outline,
      'btn-sm': size === 'small',
      'btn-lg': size === 'large',
    }),
})
