import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import nanoid from 'nanoid'

import getDisplayName from '../utils/getDisplayName'
import { closest, getTextWidth } from '../utils/dom'

/**
 * Class used as an instance property to manage subscribers and state for wrapped
 * component.
 * Heavily borrowed from https://github.com/ReactTraining/react-broadcast
 */
class ActiveStateHandler {
  subscriptions = []

  constructor(active = false) {
    this.active = active
  }

  /**
   * Update active state property internally and notify all subscribers that a change
   * has occurred.
   */
  setActive = active => {
    this.active = active
    this.subscriptions.forEach(subscription => subscription(active))
  }
  /**
   * Subcomponents call subscribe to be notified when active state has changed.
   * Return a function subcomponent can call to unsubscribe on unMount
   */
  subscribe = subscription => {
    this.subscriptions.push(subscription)

    // Method will remove the subscription from the active list when called
    return () => {
      this.subscriptions = this.subscriptions.filter(item => item !== subscription)
    }
  }
}

/**
 * HOC adds active state to context accessible by subcomponents at any location in
 * consuming application.
 */
export default ({ element, mouseEvents } = {}) => Wrapped =>
  class WithActive extends Component {
    static displayName = `withActive${getDisplayName(Wrapped)}`
    /**
     * Class statics are not copied to `withActive`. See 'Static Methods Must Be
     * Copied Over: https://facebook.github.io/react/docs/higher-order-components.html
     * The package `hoist-non-react-statics` is a solution for automatically copying
     * all class statics, but unless it becomes commonplace to use the library HOCs
     * with external components, this seems unnecessary. For now, we know that
     * statics that are required and manually transfer them
     */
    static Content = Wrapped.Content
    static Toggle = Wrapped.Toggle
    static Item = Wrapped.Item

    static propTypes = {
      active: bool,
      onActivate: func,
      onActivated: func,
      onDeactivate: func,
      onDeactivated: func
    }

    static childContextTypes = {
      // Context cannot change! Passed context is a wrapper that should not change
      // use caps to signify it is a constant, only the internal values can change
      COMPONENTRY_ACTIVE: shape({
        activate: func,
        active: bool,
        deactivate: func,
        guid: string,
        subscribe: func,
        toggle: func,
        element: string
      })
    }
    getChildContext = () => ({ COMPONENTRY_ACTIVE: this.activeContext() })

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * Active is a prop and changed, this lets components be controlled by props
     */
    componentWillReceiveProps(nextProps) {
      if (this.props.active !== nextProps.active)
        this.activeStateHandler.setActive(nextProps.active)
    }

    // Instance Properties
    // ---------------------------------------------------------------------------
    /**
     * Each instance has a separate class handling the state. Context is scoped and
     * only that class' state is passed.
     */
    activeStateHandler = new ActiveStateHandler(this.props.active)
    /**
     * Guid instance property will be uniquely assigned once for each modal instance,
     * this unique id is then passed to all children through context where it can be
     * used to wire together title aria attributes
     */
    guid = nanoid()
    /**
     * Internal cache for width of tooltip content. Set after calculating content
     * width and reused on subsequent renders if content text has not changed.
     */
    contentWidth = null
    /**
     * Internal cache for tooltip content. Used to check if the content has changed
     * between showings of tooltip.
     */
    content = null

    // Methods
    // ---------------------------------------------------------------------------
    /**
     * Convenience method for getting contents of context.
     */
    activeContext = () => ({
      activate: this.activate,
      active: this.activeStateHandler.active,
      deactivate: this.deactivate,
      guid: this.guid,
      subscribe: this.activeStateHandler.subscribe,
      toggle: this.toggle,
      element: element || 'state'
    })
    /**
     * Call toggle if click event was not inside the element
     */
    clickHandler = e => {
      if (!closest(e.target, element)) this.deactivate(e)
    }
    /**
     * On keypress check if `esc` (27) was pressed and close
     */
    keyHandler = e => {
      if (e.which === 27) this.deactivate(e)
    }
    /**
     * Do the activation stuff
     */
    activate = e => {
      const { onActivate, onActivated } = this.props
      if (onActivate) onActivate(this, e)

      // Don't close drawers on `esc`
      if (element !== 'drawer') {
        document.addEventListener('keydown', this.keyHandler)
      }

      // Add click outside container handlers for dropdowns only
      if (element === 'dropdown') {
        document.addEventListener('mouseup', this.clickHandler)
        document.addEventListener('touchend', this.clickHandler)
      }

      if (element === 'tooltip' || element === 'popover') {
        // Position absolute tooltip is constrained by the parent width. Set tooltip
        // width to content width to overflow parent bounds
        const contentElement = document.getElementById(this.guid)
        const content = contentElement.innerText
        this.content = content

        if (content === this.content && this.contentWidth) {
          // If width has already been calculated and content has not changed, use
          // cached width for performance
          contentElement.style.width = `${this.contentWidth}px`
        } else {
          // Get all styles of content element, set width and cache
          const styles = window.getComputedStyle(contentElement)
          // Get padding, font size and font family of content
          const width =
            getTextWidth(content, `${styles.fontSize} ${styles.fontFamily}`) +
            parseFloat(styles.paddingLeft) +
            parseFloat(styles.paddingRight) +
            1

          contentElement.style.width = `${width}px`
          this.contentWidth = width
        }
      }

      this.activeStateHandler.setActive(true)
      if (onActivated) onActivated(this, e)
    }
    /**
     * Do the deactivation stuff
     */
    deactivate = e => {
      const { onDeactivate, onDeactivated } = this.props
      if (onDeactivate) onDeactivate(this, e)
      this.activeStateHandler.setActive(false)

      if (element !== 'drawer') {
        document.removeEventListener('keydown', this.keyHandler)
      }

      if (element === 'dropdown') {
        document.removeEventListener('mouseup', this.clickHandler)
        document.removeEventListener('touchend', this.clickHandler)
      }

      if (onDeactivated) onDeactivated(this, e)
    }
    /**
     * For toggle components call activate/deactivate based on current active state
     */
    toggle = e => {
      if (this.activeStateHandler.active) {
        this.deactivate(e)
      } else {
        this.activate(e)
      }
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      return (
        <Wrapped
          activeContext={this.activeContext()}
          onMouseEnter={mouseEvents ? this.activate : undefined}
          onMouseLeave={mouseEvents ? this.deactivate : undefined}
          {...this.props}
        />
      )
    }
  }
