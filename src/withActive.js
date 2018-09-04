import React, { type ComponentType } from 'react'
import ActiveProvider from './ActiveProvider'

/**
 * Components that need transitional active and visible states will use the
 * Consumer to access the activeCtx, and pass Wrapped into the ActiveTransition
 * component, which uses state to manage passing active and visible according
 * to the transition duration for that component.
 */

export default (Wrapped: ComponentType<*>) => {
  // $FlowIgnore
  const WithActive = props => (
    <ActiveProvider.Consumer>
      {activeCtx => <Wrapped {...activeCtx} {...props} />}
    </ActiveProvider.Consumer>
  )
  WithActive.displayName = `withActive(${Wrapped.displayName || Wrapped.name})`
  return WithActive
}
