import React, { createContext, useContext, useRef } from 'react'
import { nanoid } from 'nanoid'
import { useTheme } from '../Theme/Theme'
import { element } from '../utils/element-creator'
import { staticComponent } from '../utils/static-component-builder'

const InputCtx = createContext({ guid: null })

/**
 * [Input component 📝](https://componentry.design/components/input)
 */
export function Input({ children }) {
  /**
   * Guid instance property will be uniquely assigned once for each input
   * instance, this unique id is then passed to all children through context
   * where it can be used to wire together aria attributes
   */
  const { current: guid } = useRef(nanoid())

  return <InputCtx.Provider value={{ guid }}>{children}</InputCtx.Provider>
}
Input.displayName = 'Input'

/**
 * [Input field component 📝](https://componentry.design/components/input)
 */
Input.Field = function InputField(props) {
  return element({
    as: 'input',
    type: 'text',
    componentCx: 'input-field',
    id: useContext(InputCtx).guid, // aria -> htmlFor
    ...useTheme('InputField'),
    ...props,
  })
}
Input.Field.displayName = 'InputField'

/**
 * [Input label component 📝](https://componentry.design/components/input)
 */
Input.Label = function InputLabel(props) {
  return element({
    as: 'label',
    componentCx: 'input-label',
    htmlFor: useContext(InputCtx).guid, // aria -> id
    ...useTheme('InputLabel'),
    ...props,
  })
}
Input.Label.displayName = 'InputLabel'

/**
 * [Input error component 📝](https://componentry.design/components/input)
 */
Input.Error = staticComponent('InputError', {
  componentCx: 'input-error',
})

/**
 * [Input description component 📝](https://componentry.design/components/input)
 */
Input.Description = staticComponent('InputDescription', {
  componentCx: 'input-description',
})
