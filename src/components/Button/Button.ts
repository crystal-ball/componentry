import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../../utils/types'
import { element } from '../../utils/element-creator'

interface ButtonProps extends ComponentBaseProps<'button'> {
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
  variant?: 'filled' | 'outlined'
}

/**
 * [Button component 📝](https://componentry.design/components/button)
 * @experimental
 */
export const Button: React.FC<ButtonProps> = (props) => {
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

  return element<ButtonProps>('Button', {
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
}
Button.displayName = 'Button'
