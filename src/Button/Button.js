import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * [Button component 📝](https://componentry.design/components/button)
 */
export default function Button(props) {
  const merged = {
    as: 'button',
    type: 'button',
    variant: 'btn',
    ...useTheme('Button'),
    ...props,
  }

  return elem({
    elemClassName: actionClasses(merged),
    ...merged,
  })
}
Button.displayName = 'Button'
