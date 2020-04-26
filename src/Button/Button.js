import elem from '../elem-factory'
import { actionClasses } from '../utils/classes'
import { useTheme } from '../Theme/Theme'

/**
 * [Button component 📝](https://componentry.design/components/button)
 */
export default function Button(props) {
  const {
    as = 'button',
    baseClass = 'btn',
    type = 'button',
    variant = 'primary',
    ...merged
  } = {
    ...useTheme('Button'),
    ...props,
  }

  return elem({
    as,
    type,
    elemClassName: actionClasses(baseClass, variant, merged),
    ...merged,
  })
}
Button.displayName = '✨Button'
/** Base class for creating Button className variants */
Button.baseClass = 'btn'
