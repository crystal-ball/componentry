import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import nanoid from 'nanoid'

import getDisplayName from '../utils/getDisplayName'
import { closest, getTextWidth } from '../utils/dom'

class ActiveStateHandler {
  constructor(active) {
    this.active = active
  }

  subscriptions = []

  setActive = active => {
    this.active = active
    this.subscriptions.forEach(subscription => subscription(active))
  }

  // TODO: Handle unsubscribe
  subscribe = subscription => {
    this.subscriptions.push(subscription)
  }
}

/**
 * @param {Object} stateConfigs
 */
export default ({ active = false, type } = {}) => Wrapped =>
  class WithState extends Component {
    static displayName = `withState${getDisplayName(Wrapped)}`
    /**
     * Class statics are not copied to `WithState`. See 'Static Methods Must Be
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
      onActivate: func,
      onActivated: func,
      onDeactivate: func,
      onDeactivated: func
    }

    static defaultProps = {
      onActivate() {},
      onActivated() {},
      onDeactivate() {},
      onDeactivated() {}
    }

    static childContextTypes = {
      componentry_state: shape({
        activate: func,
        active: bool,
        deactivate: func,
        guid: string,
        subscribe: func,
        toggle: func,
        type: string
      })
    }

    constructor(props) {
      super(props)
      this.activeStateHandler = new ActiveStateHandler(active)
    }

    getChildContext = () => ({ componentry_state: this.getComponentryState() })
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
     *
     */
    getComponentryState = () => ({
      activate: this.activate,
      active: this.activeStateHandler.active,
      deactivate: this.deactivate,
      guid: this.guid,
      subscribe: this.activeStateHandler.subscribe,
      toggle: this.toggle,
      type: type || 'state'
    })
    /**
     *
     */
    clickHandler = e => {
      // If the click was ouside dropdown, close the dropdown and then cleanup the listener
      if (!closest(e.target, `${this.guid}-container`)) {
        this.toggle()
      }
    }
    /**
     *
     */
    keyHandler = e => {
      // Escape key is which 27, when escape key is hit, toggle state
      if (e.which === 27) {
        this.toggle()
      }
    }
    /**
     *
     */
    activate = e => {
      const { onActivate, onActivated } = this.props
      onActivate(this, e)
      // Don't close drawers on `esc`
      if (type !== 'drawer') document.addEventListener('keydown', this.keyHandler)

      // Add click outside container handlers for dropdowns only
      if (type === 'dropdown') {
        document.addEventListener('mouseup', this.clickHandler)
        document.addEventListener('touchend', this.clickHandler)
      }

      if (type === 'tooltip' || type === 'popover') {
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
      onActivated(this, e)
    }
    /**
     *
     */
    deactivate = e => {
      const { onDeactivate, onDeactivated } = this.props
      onDeactivate(this, e)
      this.activeStateHandler.setActive(false)

      if (type !== 'drawer') {
        document.removeEventListener('keydown', this.keyHandler)
      }

      if (type === 'dropdown') {
        document.removeEventListener('mouseup', this.clickHandler)
        document.removeEventListener('touchend', this.clickHandler)
      }
      onDeactivated(this, e)
    }
    /**
     *
     */
    toggle = e => {
      this.activeStateHandler.active ? this.deactivate(e) : this.activate(e) // eslint-disable-line
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      return <Wrapped state={this.getComponentryState()} {...this.props} />
    }
  }
