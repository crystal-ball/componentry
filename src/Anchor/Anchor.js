import elem from '../elem-factory'
import { targetClassNames } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * Anchor component
 */
export default function Anchor(props) {
  const merged = {
    as: 'a',
    ...useTheme('Anchor'),
    ...props,
  }

  // If variant className isn't set, default to `a` unless the `button`
  // shorthand switch was passed
  merged.variant = merged.variant || (merged.button ? 'btn' : 'a')

  const componentClassNames = targetClassNames(merged)

  // Clear component props that are also library props
  merged.color = null
  merged.size = null

  return elem({
    componentClassNames,
    ...merged,
  })
}
