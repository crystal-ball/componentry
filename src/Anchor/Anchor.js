import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * Anchor component
 */
export default function Anchor(props) {
  const merged = { as: 'a', variant: 'a', ...useTheme('Anchor'), ...props }

  // When rendering a button with anchor styles, add the button type
  if (merged.as === 'button') {
    merged.type = 'button'
  }

  return elem({
    componentClassNames: actionClasses(merged),
    ...merged,
  })
}
