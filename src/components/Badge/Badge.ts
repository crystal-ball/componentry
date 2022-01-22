import { useTheme } from '../Theme/Theme'
import { element } from '../../utils/element-creator'
import { ComponentBaseProps } from '../../utils/types'

interface BadgeProps extends ComponentBaseProps<'div'> {
  /** Variant color */
  color?: 'primary'
  /** Display variant */
  variant?: 'filled'
}

/**
 * [Badge component 📝](https://componentry.design/components/badge)
 * @experimental
 */
export const Badge: React.FC<BadgeProps> = (props) => {
  const {
    color,
    variant = 'filled',
    ...rest
  } = {
    ...useTheme<BadgeProps>('Badge'),
    ...props,
  }

  return element({
    componentCx: [`🅲Badge-base 🅲Badge-${variant}`, { [`🅲Badge-${color}Color`]: color }],
    ...rest,
  })
}
Badge.displayName = 'Badge'
