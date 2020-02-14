import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * [Button component 📝](https://componentry.design/components/button)
 */
export default function Button(props) {
  const { as = 'button', type = 'button', variant = 'btn', ...merged } = {
    ...useTheme('Button'),
    ...props,
  }

  return elem({
    as,
    type,
    elemClassName: actionClasses(variant, merged),
    ...merged,
  })
}
Button.displayName = 'Button'
