import { useTheme } from '../Theme/Theme'
import { element } from '../../utils/element-creator'
import { ComponentBaseProps } from '../../utils/types'

interface BadgeProps extends ComponentBaseProps<'div'> {
  /** Variant color */
  color?: 'primary'
  /** Display variant */
  variant?: 'primary' | 'rounded'
}

/**
 * [Badge component 📝](https://componentry.design/components/badge)
 * @experimental
 */
export const Badge: React.FC<BadgeProps> = (props) => {
  const {
    color,
    variant = 'primary',
    ...rest
  } = {
    ...useTheme<BadgeProps>('Badge'),
    ...props,
  }

  return element('Badge', {
    componentCx: [`badge-${variant}`, { [`badge-color-${color}`]: color }],
    ...rest,
  })
}
Badge.displayName = 'Badge'
