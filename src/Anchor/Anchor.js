import elem from '../elem-factory'
import { targetClassNames } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * Anchor component
 */
export default function Anchor({ button, ...props }) {
  const merged = {
    as: 'a',
    variant: button ? 'btn' : 'a',
    ...useTheme('Anchor'),
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
