/* eslint-disable @typescript-eslint/no-empty-interface */

import { ComponentBaseProps } from '../utils/types'
import { staticComponent } from '../utils/static-component-builder'

export interface FormGroupProps extends ComponentBaseProps<'div'> {}

/**
 * [FormGroup component 📝](https://componentry.design/components/form-group)
 * @experimental
 */
export const FormGroup = staticComponent('FormGroup')
