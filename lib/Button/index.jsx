import { bool, oneOf, shape, string } from 'prop-types'
import classNames from 'classnames'

import { renderContainer } from '../utils/element-factory'
import { themeColorNames } from '../utils/theme'

/**
 * The `Button` component is the base component for any element that has a user
 * interaction in the library. It is important to use either a button element or a
 * valid href for any click target in order to support keyboard users _(See A++
 * Accessibility Guide)_. In cases where a target that looks like a link is required,
 * but the target is causes an in page change, the `Button` component should be used
 * and passed the `link` property.
 *
 * TODO: Document that a default theme color is used for every button that is not a
 * link button, this can be suppressed by passing `color={null}` to component.
 */

Button.propTypes = {
  /** Additional CSS classes */
  className: string,
  /**
   * Theme color for button, used to create themed buttons and themed outline
   * buttons. A default value for color is passed from the `ThemeProvider` as
   * `defaultButtonColor` and is used with any button that is not a `link` button.
   * Because sometimes it's desirable to have a button that is not a `link` and ALSO
   * not a themed button, it's possible to pass `null` for color and the default
   * theme value will not be used. See the `Dropdown.Item` for an example of this.
   *
   * Empty string is a valid value b/c that is the default that tells the component
   * to use the default theme color configured in the context.
   */
  color: oneOf([...themeColorNames, 'link']),
  /**
   * A++ Accessibility: Creates a button that looks exactly like an anchor. This
   * should be used for any action trigger in an application that is not a routing
   * event.
   */
  link: bool,
  /** Creates outline style button, uses `color` for outline theme. */
  outline: bool,
  /** Create a small or large style button */
  size: oneOf(['large', 'small'])
}

Button.contextTypes = {
  THEME: shape({
    defaultButtonColor: string
  })
}

export default function Button(
  { className, color, link, outline, size, ...rest },
  { THEME: { defaultButtonColor = 'primary' } = {} }
) {
  // Pass null to suppress output of any theme color classes
  const renderColor = color || color === null ? color : defaultButtonColor

  // Always include class 'btn' and passed className
  // btn-color for non link, non outline buttons that have a theme color (color can be
  // suppressed by passing color=null)
  const classes = classNames('btn', className, {
    [`btn-${renderColor}`]: renderColor && !link && !outline,
    'btn-anchor': link, // Will create a button that looks just like an anchor
    [`btn-outline-${renderColor}`]: outline,
    'btn-lg': size === 'large',
    'btn-sm': size === 'small'
  })

  return renderContainer({
    As: 'button',
    className: classes,
    type: 'button',
    ...rest
  })
}
