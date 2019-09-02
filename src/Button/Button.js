import elem from '../elem-factory'
import { targetClassNames } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * Button component
 */
export default function Button(props) {
  const merged = {
    as: 'button',
    type: 'button',
    ...useTheme('Button'),
    ...props,
  }

  // If variant className isn't set, default to `btn` unless the `anchor`
  // shorthand switch was passed
  merged.variant = merged.variant || (merged.anchor ? 'a' : 'btn')

  const componentClassNames = targetClassNames(merged)

  // Clear component props that are also library props
  merged.color = null
  merged.size = null

  return elem({
    componentClassNames,
    ...merged,
  })
}
