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
    variant: anchor ? 'a' : 'btn',
    ...useTheme('Button'),
    ...props,
  }

  const componentClassNames = targetClassNames(merged)

  // Clear component props that are also library props
  merged.color = null
  merged.size = null

  return elem({
    componentClassNames,
    ...merged,
  })
}
