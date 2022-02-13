import { type ComponentBaseProps } from '../../utils/base-types'
import { staticComponent } from '../../utils/static-component-builder'

export interface FormGroupProps extends ComponentBaseProps<'div'> {}

/**
 * [FormGroup component 📝](https://componentry.design/components/form-group)
 * @experimental
 */
export const FormGroup = staticComponent('FormGroup')
