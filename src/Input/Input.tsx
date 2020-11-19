/* eslint-disable @typescript-eslint/no-empty-interface */

import React, { createContext, useContext, useRef } from 'react'
import { nanoid } from 'nanoid'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'
import { staticComponent } from '../utils/static-component-builder'

export interface InputProps extends ComponentBaseProps<'input'> {}

export interface InputDescriptionProps extends ComponentBaseProps<'div'> {}

export interface InputErrorProps extends ComponentBaseProps<'div'> {}

export interface InputFieldProps extends ComponentBaseProps<'input'> {}

export interface InputLabelProps extends ComponentBaseProps<'label'> {}

export interface Input {
  (props: InputProps): React.ReactElement
  displayName: 'Input'
  /**
   * [Input description component 📝](https://componentry.design/components/input)
   */
  Description: React.FC<InputDescriptionProps>
  /**
   * [Input error component 📝](https://componentry.design/components/input)
   */
  Error: React.FC<InputErrorProps>
  /**
   * [Input field component 📝](https://componentry.design/components/input)
   */
  Field: React.FC<InputFieldProps>
  /**
   * [Input label component 📝](https://componentry.design/components/input)
   */
  Label: React.FC<InputLabelProps>
}

const InputCtx = createContext<{ guid: string }>({ guid: null })

/**
 * [Input component 📝](https://componentry.design/components/input)
 */
export const Input: Input = ({ children }: InputProps) => {
  /**
   * Guid instance property will be uniquely assigned once for each input
   * instance, this unique id is then passed to all children through context
   * where it can be used to wire together aria attributes
   */
  const { current: guid } = useRef(nanoid())

  return <InputCtx.Provider value={{ guid }}>{children}</InputCtx.Provider>
}
Input.displayName = 'Input'

// --- Description subcomponent ---

Input.Description = staticComponent('InputDescription')

// --- Error subcomponent ---

Input.Error = staticComponent('InputError')

// --- Field subcomponent ---

Input.Field = function InputField(props) {
  return element('InputField', {
    as: 'input',
    type: 'text',
    id: useContext(InputCtx).guid, // aria -> htmlFor
    ...useTheme<Input>('InputField'),
    ...props,
  })
}
Input.Field.displayName = 'InputField'

// --- Label subcomponent ---

Input.Label = function InputLabel(props) {
  return element('InputLabel', {
    as: 'label',
    htmlFor: useContext(InputCtx).guid, // aria -> id
    ...useTheme('InputLabel'),
    ...props,
  })
}
Input.Label.displayName = 'InputLabel'
