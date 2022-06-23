import React from 'react'
import { staticComponent } from '../../utils/static-component-builder'
import { UtilityProps } from '../../utils/utility-classes'

export interface FormGroupProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

/**
 * [FormGroup component 📝](https://componentry.design/components/form-group)
 * @experimental
 */
export const FormGroup = staticComponent('FormGroup')
