import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * [Anchor component 📝](https://componentry.design/components/anchor)
 */
export default function Anchor(props) {
  const merged = { as: 'a', variant: 'a', ...useTheme('Anchor'), ...props }

  return elem({
    elemClassName: actionClasses(merged),
    ...merged,
  })
}
Anchor.displayName = 'Anchor'
