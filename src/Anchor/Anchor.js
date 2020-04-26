import elem from '../elem-factory'
import { actionClasses } from '../utils/classes'
import { useTheme } from '../Theme/Theme'

/**
 * [Anchor component 📝](https://componentry.design/components/anchor)
 */
export default function Anchor(props) {
  const { baseClass = 'a', variant = 'primary', ...merged } = {
    ...useTheme('Anchor'),
    ...props,
  }

  return elem({
    as: 'a',
    elemClassName: actionClasses(baseClass, variant, merged),
    ...merged,
  })
}
Anchor.displayName = '✨Anchor'
/** Base class for creating Anchor className variants */
Anchor.baseClass = 'a'
