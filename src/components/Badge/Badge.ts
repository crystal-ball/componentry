import { useTheme } from '../Theme/Theme'
import { element } from '../../utils/element-creator'
import { type ComponentBaseProps } from '../../utils/base-types'

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
    componentCx: [
      `C9Y-Badge-base C9Y-Badge-${variant}`,
      { [`C9Y-Badge-${color}Color`]: color },
    ],
    ...rest,
  })
}
Badge.displayName = 'Badge'
