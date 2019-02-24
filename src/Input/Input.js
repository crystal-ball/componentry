import React, { createContext, useContext, useRef } from 'react'
import nanoid from 'nanoid'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const InputCtx = createContext()

export default function Input(props) {
  /**
   * Guid instance property will be uniquely assigned once for each modal instance,
   * this unique id is then passed to all children through context where it can be
   * used to wire together aria attributes
   */
  const guid = useRef(nanoid())

  return <InputCtx.Provider value={{ guid }}>{props.children}</InputCtx.Provider>
}

/**
 * FormGroup provides form structure
 */

const InputField = props =>
  elem({
    defaultAs: 'input',
    type: 'text',
    classes: 'input-field',
    id: useContext(InputCtx).guid,
    ...useTheme('InputField'),
    ...props,
  })
Input.Field = InputField

const InputLabel = props =>
  elem({
    defaultAs: 'label',
    classes: 'input-label',
    htmlFor: useContext(InputCtx).guid,
    ...useTheme('InputLabel'),
    ...props,
  })
Input.Label = InputLabel

const InputError = props =>
  elem({
    classes: 'input-error',
    ...useTheme('InputError'),
    ...props,
  })
Input.Error = InputError

const InputDescription = props =>
  elem({
    classes: 'input-description',
    ...useTheme('InputDescription'),
    ...props,
  })
Input.Description = InputDescription

/**
 * Requirements:
 * 1. Aria attrs for label and input
 * 2. Ability to add sr-hidden to Label
 */
