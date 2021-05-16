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
 * @experimental
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = 'primary', active, color, disabled, size, ...merged } = {
    ...useTheme<ButtonProps>('Button'),
    ...props,
  }

  // If an href or to is passed, this instance should render an anchor tag
  const asAnchor = Boolean(merged.href || merged.to)

  return element<ButtonProps>('Button', {
    as: asAnchor ? 'a' : 'button',
    ref,
    type: asAnchor ? undefined : 'button',
    disabled,
    componentCx: [
      `button-${variant}`,
      {
        [`button-${size}`]: size,
        [`button-color-${color}`]: color,
        active,
        disabled, // We include a disabled class AND pass disabled prop to element for a11y
      },
    ],
    ...merged,
  })
})
Button.displayName = 'Button'
