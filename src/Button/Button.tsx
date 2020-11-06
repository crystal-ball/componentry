import cx from 'classnames'
import { useTheme } from '../Theme/Theme'
import { BaseProps } from '../utils/base-types'
import { element } from '../factories/element'

interface ButtonProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
  /** Toggles an active element style */
  active?: boolean
  /** Button variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'sm' | 'lg'
  /** Sets the HTML element to an anchor */
  to?: string
  /** Display variant */
  variant?: 'primary' | 'secondary'
}

/**
 * [Button component 📝](https://componentry.design/components/button)
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', active, color, disabled, size, ...merged } = {
    ...useTheme<ButtonProps>('Button'),
    ...props,
  }

  // If an href or to is passed, this instance should render an anchor tag
  const asAnchor = Boolean(merged.href || merged.to)

  return element<ButtonProps>({
    as: asAnchor ? 'a' : 'button',
    type: asAnchor ? undefined : 'button',
    disabled,
    componentCx: cx('🅲-btn', `btn-${variant}`, {
      [`btn-${size}`]: size,
      [`btn-color-${color}`]: color,
      active,
      disabled, // We include a disabled class AND pass disabled prop to element for a11y
    }),
    ...merged,
  })
}
Button.displayName = 'Button'
