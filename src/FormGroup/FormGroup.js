import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * FormGroup provides form structure
 */
export default function FormGroup(props) {
  return elem({
    defaultAs: 'div',
    classes: 'form-group',
    ...useTheme('FormGroup'),
    ...props,
  })
}
