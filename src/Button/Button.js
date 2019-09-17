import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
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

  return elem({
    // Defaults
    variant: merged.anchor ? 'a' : 'btn',
    componentClassNames: actionClasses(merged),
    // Overrides
    ...merged,
    // Clear component props that are also library props
    color: null,
    size: null,
  })
}
