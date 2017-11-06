// @flow
import React, { Component } from 'react'
import type { ComponentType } from 'react'
import { func, shape, string } from 'prop-types'

import getDisplayName from '../utils/getDisplayName'

type State = {
  active: boolean
}

/**
 * HOC passes active state props along with computed aria attributes for the state.
 * The `active`, `activate` and `deactivate` props are passed from active state
 * provider through context.
 * @param ariaConfigs Options object describes aria attributes to pass down
 */
export default (Wrapped: ComponentType<*>) =>
  class WithActive extends Component<{}, State> {
    unsubscribe: Function

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
      })
    }

    /**
     * Active state is only used to trigger renders, passed state should only come
     * from context.
     */
    state = { active: false }

    /**
     * If this HOC is used outside the scope of a `withState` HOC, the ACTIVE
     * context will not exist. This prop makes it easy to skip context operations in
     * that case.
     */
    invalidContext: boolean = false

    constructor(props: {}, context: { ACTIVE?: {} }) {
      super(props)
      // Update `invalidContext` flag if ACTIVE is not truthy
      if (!context.ACTIVE) this.invalidContext = true
    }

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * Ensure that state used for causing renders matches context state before first
     * render
     */
    componentWillMount() {
      if (this.invalidContext) return

      const active = this.context.ACTIVE.getActive()
      if (this.state.active !== active) this.setState({ active })
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
        if (active !== this.state.active) this.setState({ active })
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

      const { activate, deactivate, guid, getActive } = this.context.ACTIVE

      return (
        <Wrapped
          guid={guid}
          active={getActive()}
          activate={activate}
          deactivate={deactivate}
          {...this.props}
        />
      )
    }
  }
