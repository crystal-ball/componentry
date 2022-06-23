import { nanoid } from 'nanoid'
import React, {
  type ComponentPropsWithoutRef,
  createContext,
  useContext,
  useRef,
} from 'react'
import { element } from '../../utils/element-creator'
import { staticComponent } from '../../utils/static-component-builder'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

export interface InputProps
  extends UtilityProps,
    Omit<ComponentPropsWithoutRef<'input'>, 'height' | 'width'> {}

export interface InputDescriptionProps
  extends UtilityProps,
    ComponentPropsWithoutRef<'div'> {}

export interface InputErrorProps extends UtilityProps, ComponentPropsWithoutRef<'div'> {}

export interface InputFieldProps
  extends UtilityProps,
    Omit<ComponentPropsWithoutRef<'input'>, 'height' | 'width'> {
  invalid?: boolean
}

export interface InputLabelProps
  extends UtilityProps,
    ComponentPropsWithoutRef<'label'> {}

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

type InputCtx = { guid: string }
const InputCtx = createContext<null | InputCtx>(null)

/**
 * [Input component 📝](https://componentry.design/components/input)
 * @experimental
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

// --- Description sub-component ---

Input.Description = staticComponent('InputDescription')

// --- Error sub-component ---

Input.Error = staticComponent('InputError')

// --- Field sub-component ---

Input.Field = function InputField(props) {
  const ctx = useContext(InputCtx)
  assertContext(ctx)

  const { invalid = false, ...rest } = {
    ...useThemeProps('InputField'),
    ...props,
  }

  return element({
    as: 'input',
    type: 'text',
    id: ctx.guid, // aria -> htmlFor
    invalid: invalid ? true : undefined,
    componentCx: [
      'C9Y-InputField',
      {
        'C9Y-invalid': invalid,
      },
    ],
    ...rest,
  })
}
Input.Field.displayName = 'InputField'

// --- Label sub-component ---

Input.Label = function InputLabel(props) {
  const ctx = useContext(InputCtx)
  assertContext(ctx)

  return element({
    as: 'label',
    htmlFor: ctx.guid, // aria -> id
    componentCx: 'C9Y-InputLabel',
    ...useThemeProps('InputLabel'),
    ...props,
  })
}
Input.Label.displayName = 'InputLabel'

// --------------------------------------------------------
// Utils

/**
 * Utility asserts ctx presence for safe access
 */
function assertContext(ctx: null | InputCtx): asserts ctx is InputCtx {
  if (!ctx) throw new Error('Input context cannot be used outside of Input component')
}
