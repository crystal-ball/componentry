import elem from '../elem-factory'
import { actionClasses } from '../utils/classes'
import { useTheme } from '../Theme/Theme'

/**
 * [Button component 📝](https://componentry.design/components/button)
 */
export default function Button(props) {
  const { baseClass = 'btn', variant = 'primary', ...merged } = {
    ...useTheme('Button'),
    ...props,
  }

  return elem({
    as: 'button',
    type: 'button',
    elemClassName: actionClasses(baseClass, variant, merged),
    ...merged,
  })
}
Button.displayName = 'Button'
/** Base class for creating Button className variants */
Button.baseClass = 'btn'
