// @flow
import React, { Component } from 'react'
import type { ComponentType } from 'react'
import { func, number, shape, string } from 'prop-types'

import getDisplayName from '../utils/getDisplayName'
import type { Theme } from '../ThemeProvider'
import type { ContextActive } from './withState'

export type ActiveProps = {
  activate?: Function,
  active?: boolean,
  deactivate?: Function,
  visible?: boolean
}

type Options = {
  /**
   * For active state components that should have a transition, eg Alerts and
   * Modals. Setting this to true will provide visibility and active props to
   * transition opacity before updating active state
   */
  transitionState: boolean
}

type Props = {
  /**
   * Override the default 300ms/ THEME duration for a specific component
   */
  transitionDuration?: number
}

type State = {
  active: boolean,
  visible: boolean
}

/**
 * HOC passes active state props along with computed aria attributes. Component is
 * responsible for passing ACTIVE context as props and handling state transitions
 * when appropriate.
 */
export default ({ transitionState = false }: Options = {}) => (
  Wrapped: ComponentType<*>
) =>
  class WithActive extends Component<Props, State> {
    unsubscribe: Function
    transitionDuration: number

    // $FlowFixMe
    static Header = Wrapped.Header
    // $FlowFixMe
    static Body = Wrapped.Body
    // $FlowFixMe
    static Footer = Wrapped.Footer
    // $FlowFixMe
    static Title = Wrapped.Title

    // $FlowFixMe
    static displayName = `withActive${getDisplayName(Wrapped)}`

    static contextTypes = {
      ACTIVE: shape({
        activate: func,
        deactivate: func,
        getActive: func,
        guid: string,
        subscribe: func
      }),
      THEME: shape({
        transitionDuration: number
      })
    }

    state = {
      active: false,
      visible: false
    }

    /**
     * If this HOC is used outside the scope of a `withState` HOC, the ACTIVE
     * context will not exist. This prop makes it easy to skip context operations in
     * that case.
     */
    invalidContext: boolean = false

    constructor(props: Props, context: { ACTIVE?: ContextActive, THEME?: Theme }) {
      super(props)
      // Update bail out flag when context is not present
      if (!context.ACTIVE) this.invalidContext = true

      const { transitionDuration = 300 } = context.THEME || {}

      // props has precedence to allow for single instance overrides, context
      // can be used for app wide configs, fall back to defaults
      this.transitionDuration = this.props.transitionDuration || transitionDuration
    }

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * Ensure that state matches context before first render
     */
    componentWillMount() {
      if (this.invalidContext) return

      const active = this.context.ACTIVE.getActive()
      if (this.state.active !== active) this.setState({ active, visible: active })
    }
    /**
     * Subscribe to active state updates on mount, trigger renders with setState
     * when state changes. Typically this won't be needed b/c parent component will
     * rerender on active state change. We still subscribe in case
     * `shouldComponentUpdate` on an intermediate component returns false.
     */
    componentDidMount() {
      if (this.invalidContext) return

      this.unsubscribe = this.context.ACTIVE.subscribe(active => {
        if (active !== this.state.active) {
          /**
           * Handle: transitionState and order of transitions:
           *
           * When transition state is true, the visible and active state is
           * transitioned for opacity transitions:
           *
           * 1. When activating, set active true immediately for `display`, then
           *    wait 15ms before starting visibility transition otherwise browsers
           *    see the `display` and visibility transitions as the same event and
           *    the CSS transitions don't happen
           * 2. When deactivating, set visibility false to begin transition, after
           *    the visibility transition completes set active false for `display`
           *    changes
           */
          if (transitionState) {
            if (active) {
              this.setState({ active }, () => {
                setTimeout(() => {
                  this.setState({ visible: active })
                }, 15)
              })
            } else {
              this.setState({ visible: active }, () => {
                setTimeout(() => {
                  this.setState({ active })
                }, this.transitionDuration)
              })
            }
          } else {
            this.setState({ active })
          }
        }
      })
    }
    /**
     * Remove subscription on unmount!
     */
    componentWillUnmount() {
      if (this.unsubscribe) this.unsubscribe()
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      if (this.invalidContext) return <Wrapped {...this.props} />

      const { activate, deactivate, guid } = this.context.ACTIVE
      const { active, visible } = this.state

      return (
        // Only pass visible state if the consuming component has state transitions
        <Wrapped
          guid={guid}
          activate={activate}
          deactivate={deactivate}
          {...(transitionState ? { active, visible } : { active })}
          {...this.props}
        />
      )
    }
  }
