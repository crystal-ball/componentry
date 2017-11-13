// @flow
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

import type { ThemeColors } from '../utils/theme'

type Props = {
  /**
   * Render component as
   */
  as?: ComponentType<any> | string,
  /**
   * Children
   */
  children?: Node,
  /**
   * Additional CSS classes
   */
  className?: string,
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
  size?: 'small' | 'large'
}

type Context = {
  THEME: { Button: { [string]: any } }
}

/**
 * The `Button` component is the base component for any element that has a user
 * interaction in the library. It is important to use either a button element or a
 * valid href for any click target in order to support keyboard users _(See A++
 * Accessibility Guide)_. In cases where a target that looks like a link is
 * required, but the target causes an in page change, the `Button` component should
 * be used with the `link` prop.
 */
const Button = (
  props: Props,
  { THEME: { Button: buttonContext = {} } = {} }: Context
) => {
  // Compute props values with context defaults
  const {
    as,
    className,
    color,
    link,
    outline,
    size,
    children,
    ...rest
  } = Object.assign({}, buttonContext, props)

  return createElement(
    as || 'button',
    {
      type: 'button',
      // Always include class 'btn' and passed className, include buttonContext
      // explicitly as it will be overriden in props compute
      className: classNames('btn', className, buttonContext.className, {
        // btn-<COLOR> class is only for regular themed buttons, suppress for other
        // btn theme flavors
        [`btn-${color}`]: color && !link && !outline,
        'btn-anchor': link, // Will create a button that looks just like an anchor
        [`btn-outline-${color}`]: outline,
        'btn-lg': size === 'large',
        'btn-sm': size === 'small'
      }),
      ...rest
    },
    children
  )
}

Button.contextTypes = { THEME: shape({ Button: object }) }

export default Button
