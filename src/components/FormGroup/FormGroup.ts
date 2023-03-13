import React from 'react'
import { createStaticComponent } from '../../utils/create-static-component'
import { UtilityProps } from '../../utils/utility-props'

export interface FormGroupProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

/**
 * [FormGroup component 📝](https://componentry.design/components/form-group)
 * @experimental
 */
export const FormGroup = createStaticComponent('FormGroup')
