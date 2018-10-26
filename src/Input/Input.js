import React, { Component, Fragment, createContext } from 'react'
import nanoid from 'nanoid'
import elem from '../elem-factory'
import withTheme from '../withTheme'

const InputContext = createContext()

/**
 * FormGroup provides form structure
 */
class Input extends Component {
  static Field = withTheme('InputField', props => (
    <InputContext.Consumer>
      {inputCtx =>
        elem({
          defaultAs: 'input',
          type: 'text',
          classes: 'input-field',
          id: inputCtx.guid,
          ...props,
        })
      }
    </InputContext.Consumer>
  ))

  static Label = withTheme('InputLabel', props => (
    <InputContext.Consumer>
      {inputCtx =>
        elem({
          defaultAs: 'label',
          classes: 'input-label',
          htmlFor: inputCtx.guid,
          ...props,
        })
      }
    </InputContext.Consumer>
  ))

  static Error = withTheme('InputError', props =>
    elem({
      classes: 'input-error',
      ...props,
    }),
  )

  static Description = withTheme('InputDescription', props =>
    elem({
      classes: 'input-description',
      ...props,
    }),
  )

  /**
   * Guid instance property will be uniquely assigned once for each modal instance,
   * this unique id is then passed to all children through context where it can be
   * used to wire together aria attributes
   */
  guid = nanoid()

  render() {
    return (
      <Fragment>
        <InputContext.Provider value={{ guid: this.guid }}>
          {this.props.children}
        </InputContext.Provider>
      </Fragment>
    )
  }
}

export default Input

/**
 * Requirements:
 * 1. Aria attrs for label and input
 * 2. Ability to add sr-hidden to Label
 */
