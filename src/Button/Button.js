import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/**
 * [Button component 📝](https://componentry.design/components/button)
 */
export default function Button(props) {
  const { as = 'button', type = 'button', variant = 'primary', ...merged } = {
    ...useTheme('Button'),
    ...props,
  }

  return elem({
    as,
    type,
    elemClassName: actionClasses('btn', variant, merged),
    ...merged,
  })
}
Button.displayName = 'Button'
