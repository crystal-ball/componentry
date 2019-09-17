import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
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

  return elem({
    // Component defaults
    variant: merged.button ? 'btn' : 'a',
    componentClassNames: actionClasses(merged),
    // Overrides
    ...merged,
    // Clear component props that are also library props
    color: null,
    size: null,
  })
}
