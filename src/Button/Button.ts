import { forwardRef } from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'

interface ButtonProps extends ComponentBaseProps<'button'> {
  /** Toggles an active element style */
  active?: boolean
  /** Button variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'sm' | 'lg'
  /** Display variant */
  variant?: 'primary' | 'secondary'
}

/**
 * [Button component 📝](https://componentry.design/components/button)
 * @experimental
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    active,
    color,
    disabled,
    fullWidth,
    size,
    ...merged
  } = {
    ...useTheme<ButtonProps>('Button'),
    ...props,
  }

  return element<ButtonProps>('Button', {
    ref,
    // If an href is passed, this instance should render an anchor tag
    as: merged.href ? 'a' : 'button',
    type: merged.href ? undefined : 'button',
    disabled,
    componentCx: [
      `button-${variant}`,
      {
        [`button-${size}`]: size,
        [`button-color-${color}`]: color,
        'w-full': fullWidth,
        active,
        disabled, // We include a disabled class AND pass disabled prop to element for a11y
      },
    ],
    ...merged,
  })
})
Button.displayName = 'Button'
