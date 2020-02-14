import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * [Anchor component 📝](https://componentry.design/components/anchor)
 */
export default function Anchor(props) {
  const { variant = 'a', ...merged } = {
    ...useTheme('Anchor'),
    ...props,
  }

  return elem({
    as: 'a',
    elemClassName: actionClasses(variant, merged),
    ...merged,
  })
}
Anchor.displayName = 'Anchor'
