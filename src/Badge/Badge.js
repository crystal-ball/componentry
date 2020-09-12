import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'

/**
 * @typedef {Object} Props
 * @property {string} Props.color Set the color of the badge
 * @property {boolean} Props.rounded Sets the badge rounded styles
 */

/**
 * [Badge component 📝](https://componentry.design/components/badge)
 */
export function Badge(props) {
  /** @type {Props} */
  const { color, rounded, ...rest } = { ...useTheme('Badge'), ...props }

  return element({
    componentCx: {
      'badge': true,
      [`badge-${color}`]: color,
      'badge-rounded': rounded,
    },
    ...rest,
  })
}
Badge.displayName = 'Badge'
