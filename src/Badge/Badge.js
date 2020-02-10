import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * @typedef {Object} props
 * @property {string} props.color Set the color of the badge
 * @property {boolean} props.rounded Sets the badge rounded styles
 */

/** Badge component */
export default function Badge(props) {
  /** @type {props} */
  const { color, rounded, ...rest } = { ...useTheme('Badge'), ...props }

  return elem({
    elemClassName: {
      badge: true,
      [`badge-${color}`]: color,
      'badge-rounded': rounded,
    },
    ...rest,
  })
}
Badge.displayName = 'Badge'
