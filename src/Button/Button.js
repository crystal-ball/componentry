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

  if (!merged.variant) merged.variant = merged.anchor ? 'a' : 'btn'

  return elem({
    componentClassNames: actionClasses(merged),
    ...merged,
    // Clear component props that are also library props
    color: null,
    size: null,
  })
}
