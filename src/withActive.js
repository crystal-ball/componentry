import React, { Component, type ComponentType } from 'react'
import ActiveProvider from './Active/ActiveProvider'

type Props = {
  active: boolean | string,
  Component: ComponentType<*>,
}

type State = {
  active: boolean | string,
  visible: boolean,
}

/**
 * Component handles transitioning display and opacity using active and visible
 * state using the following rules:
 *
 * - Show: Set active true to display element, then set visible true to
 *   transition element opacity using css transitions
 * - Hide: Set visible false to start element opacity using css transitions,
 *   then after transition duration set active false to set display none
 */
class ActiveTransition extends Component<Props, State> {
  state = {
    active: this.props.active,
    visible: this.props.active,
  }

  static getDerivedStateFromProps(props) {
    // When transitioning either active or visible should update immediately.
    return props.active === true ? { active: true } : { visible: false }
  }

  componentDidUpdate() {
    const { active } = this.props

    // When component becomes active wait 1/60s (ensures browsers see addition
    // of visible as a transition state) then add visible class, transition
    // length determined by css
    if (active && !this.state.visible) {
      setTimeout(() => {
        if (this.unmounted) return
        this.setState({ visible: true })
      }, 17)
    }

    // When component becomes inactive wait the transition duration before
    // removing display to allow opacity transitions to occur before hiding
    if (!active && this.state.active) {
      setTimeout(() => {
        if (this.unmounted) return
        this.setState({ active })
      }, this.transitionDuration || 300)
    }
  }

  componentWillUnmount() {
    this.unmounted = true
  }
  render() {
    const { Component: RenderCompoent, ...rest } = this.props
    const { active, visible } = this.state
    return <RenderCompoent {...rest} visible={visible} active={active} />
  }
}

/**
 * Components that need transitional active and visible states will use the
 * Consumer to access the activeCtx, and pass Wrapped into the ActiveTransition
 * component, which uses state to manage passing active and visible according
 * to the transition duration for that component.
 */

export default (Wrapped: ComponentType<*>, transitions) => {
  // $FlowIgnore
  const WithActive = props => (
    <ActiveProvider.Consumer>
      {activeCtx =>
        transitions ? (
          <ActiveTransition Component={Wrapped} {...activeCtx} {...props} />
        ) : (
          <Wrapped {...activeCtx} {...props} />
        )
      }
    </ActiveProvider.Consumer>
  )
  WithActive.displayName = `withActive${Wrapped.displayName || Wrapped.name}`
  return WithActive
}
