import elem from '../elem-factory'
import { actionClasses } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'

/** Button component */
export default function Button(props) {
  const merged = {
    as: 'button',
    type: 'button',
    variant: 'btn',
    ...useTheme('Button'),
    ...props,
  }

  // When rendering an anchor with button styles, swap out the type attr for a
  // role attr for proper a11y
  if (merged.as === 'a') {
    merged.type = undefined
    merged.role = 'button'
  }

  return elem({
    elemClassName: actionClasses(merged),
    ...merged,
  })
}
Button.displayName = 'Button'
