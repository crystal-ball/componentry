import React from 'react'
import { createStaticComponent } from '../../utils/create-static-component'
import { UtilityProps } from '../../utils/utility-props'

export interface FormGroupProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

/**
 * Form groups provide a control point for standardizing spacing within forms.
 * @experimental
 * @see [FormGroup component 📝](https://componentry.design/components/form-group)
 */
export const FormGroup = createStaticComponent('FormGroup')
