import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export default function Badge(props) {
  const { color, rounded, ...rest } = { ...useTheme('Badge'), ...props }

  return elem({
    componentClassNames: {
      badge: true,
      [`badge-${color}`]: color,
      'badge-rounded': rounded,
    },
    ...rest,
  })
}
Badge.displayName = 'Badge'
