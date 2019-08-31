import React, { createContext, useContext, useRef } from 'react'
import nanoid from 'nanoid'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const InputCtx = createContext({ guid: null })

export default function Input({ children }) {
  /**
   * Guid instance property will be uniquely assigned once for each input
   * instance, this unique id is then passed to all children through context
   * where it can be used to wire together aria attributes
   */
  const guid = useRef(process.env.NODE_ENV === 'test' ? 'guid' : nanoid())

  return <InputCtx.Provider value={{ guid: guid.current }}>{children}</InputCtx.Provider>
}

/**
 * FormGroup provides form structure
 */

Input.Field = function InputField(props) {
  return elem({
    as: 'input',
    type: 'text',
    componentClassNames: 'input-field',
    id: useContext(InputCtx).guid,
    ...useTheme('InputField'),
    ...props,
  })
}

Input.Label = function InputLabel(props) {
  return elem({
    as: 'label',
    componentClassNames: 'input-label',
    htmlFor: useContext(InputCtx).guid,
    ...useTheme('InputLabel'),
    ...props,
  })
}

Input.Error = function InputError(props) {
  return elem({
    componentClassNames: 'input-error',
    ...useTheme('InputError'),
    ...props,
  })
}

Input.Description = function InputDescription(props) {
  return elem({
    componentClassNames: 'input-description',
    ...useTheme('InputDescription'),
    ...props,
  })
}

/**
 * Requirements:
 * 1. Aria attrs for label and input
 * 2. Ability to add sr-hidden to Label
 */
