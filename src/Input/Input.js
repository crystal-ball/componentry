import React, { createContext, useContext, useRef } from 'react'
import { nanoid } from 'nanoid'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'
import simpleComponent from '../simple-component-factory'

const InputCtx = createContext({ guid: null })

/**
 * [Input component 📝](https://componentry.design/components/input)
 */
export default function Input({ children }) {
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
  return elem({
    as: 'input',
    type: 'text',
    elemClassName: 'input-field',
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
  return elem({
    as: 'label',
    elemClassName: 'input-label',
    htmlFor: useContext(InputCtx).guid, // aria -> id
    ...useTheme('InputLabel'),
    ...props,
  })
}
Input.Label.displayName = 'InputLabel'

/**
 * [Input error component 📝](https://componentry.design/components/input)
 */
Input.Error = simpleComponent('InputError', {
  elemClassName: 'input-error',
})

/**
 * [Input description component 📝](https://componentry.design/components/input)
 */
Input.Description = simpleComponent('InputDescription', {
  elemClassName: 'input-description',
})
