import React, { Component } from 'react'

type Props = {
  active: boolean | string,
  Component: ComponentType<*>,
  /**
   * For active state components that should have a transition, eg Alerts and
   * Modals. Setting this to true will provide visibility and active props to
   * transition opacity before updating active state
   */
  transitionState?: boolean,
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

export default Wrapped => {
  class WithVisible extends Component<Props, State> {
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
          // TODO: this.transitionDuration state will always be undefined, this
          // needs to be reconnected to Theme
        }, this.transitionDuration || 300)
      }
    }

    componentWillUnmount() {
      this.unmounted = true
    }
    render() {
      // ℹ️ HOC state overrides the active prop and includes a visible prop for
      // elements that need transitioned active states (pass state second to
      // override `active` prop from `withActive`)
      return <Wrapped {...this.props} {...this.state} />
    }
  }
  WithVisible.displayName = `withVisible(${Wrapped.displayName || Wrapped.name})`
  return WithVisible
}
