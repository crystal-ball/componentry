import { forwardRef } from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { type MergePropTypes } from '../../utils/types'
import { element } from '../../utils/element-creator'

// Module augmentation interface for overriding component props' types
export interface ButtonPropsOverrides {}

interface ButtonPropsDefaults {
  /** Button variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'small' | 'large'
  /** Display variant */
  variant?: 'filled' | 'outlined'
}

type ButtonProps = MergePropTypes<ButtonPropsDefaults, ButtonPropsOverrides> &
  ComponentBaseProps<'button'>

/**
 * [Button component 📝](https://componentry.design/components/button)
 * @experimental
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'filled',
    color,
    fullWidth,
    size,
    ...merged
  } = {
    ...useTheme<ButtonProps>('Button'),
    ...props,
  }

  return element({
    ref,
    // If an href is passed, this instance should render an anchor tag
    as: merged.href ? 'a' : 'button',
    type: merged.href ? undefined : 'button',
    componentCx: [
      `🅲Button-base 🅲Button-${variant}`,
      {
        [`🅲Button-${color}Color`]: color,
        [`🅲Button-${size}Size`]: size,
        'w-full': fullWidth,
      },
    ],
    ...merged,
  })
})
Button.displayName = 'Button'
