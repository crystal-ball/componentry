import elem from '../elem-factory'
import { targetClassNames } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * Button component
 */
export default function Button({ anchor, ...props }) {
  const merged = {
    as: 'button',
    type: 'button',
    variant: anchor ? 'anchor' : 'btn',
    ...useTheme('Button'),
    ...props,
  }

  // Remap target color prop to differentiate from library text color prop
  merged._color = merged.color
  merged.color = null
  merged._size = merged.size
  merged.size = null

  return elem({
    componentClassNames: targetClassNames(merged),
    ...merged,
  })
}
