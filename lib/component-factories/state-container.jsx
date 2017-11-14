// @flow
import React, { Component, createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

import { closest, getTextWidth } from '../utils/dom'

type Options = {
  /** Component's `Content` subcomponent */
  Content: ComponentType<any>,
  /** Component's `Trigger` subcomponent */
  Trigger: ComponentType<any>,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** When tue the state container will register handlers for mouse events */
  mouseEvents?: boolean,
  /** The display name for the component, specified for better debugging */
  name: string
}

// TODO: is this fixable?
/* eslint-disable react/no-unused-prop-types */
type Props = {
  // Subcomponent shorthand props
  Content?: string,
  Trigger?: string,
  // Component props
  as?: ComponentType<any> | string,
  children?: Node | Function,
  className?: string,
  // Active boolean + change handlers from withState HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string
}

/**
 * Factory returns custom `<State />` components defined by the options.
 * State components handle...
 */
export default ({ element, mouseEvents, name, Content, Trigger }: Options) =>
  class StateContainer extends Component<Props> {
    static displayName = name

    static contextTypes = { THEME: shape({ [name]: object }) }

    /**
     * Internal cache for width of tooltip content. Set after calculating content
     * width and reused on subsequent renders if content text has not changed.
     */
    contentWidth: ?number = null
    /**
     * Internal cache for tooltip content. Used to check if the content has changed
     * between showings of tooltip.
     */
    content: ?string = null

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * The component will handle adding/removing event listeners for click/keypress
     * when the passed `active` state has changed. This lets us automatically add
     * these additional listeners for both controlled and uncontrolled instances of
     * a component. Because the added handlers only call the passed
     * `activate`/`deactivate` props, controlled components can decide whether or
     * not to update state during these events
     * @param {Object} nextProps
     */
    componentWillReceiveProps({ active }: Props) {
      if (this.props.active !== active) {
        if (active) this.handleActivated()
        if (!active) this.handleDeactivated()
      }
    }

    // Methods
    // ---------------------------------------------------------------------------
    /**
     * Call deactivate if click event was not inside the element
     */
    clickHandler: EventHandler = (e): void => {
      if (!closest(e.target, element)) this.props.deactivate(e)
    }
    /**
     * Call deactivate on keypress if `esc` (27) was pressed
     */
    keyHandler: KeyboardEventHandler = (e): void => {
      if (e.which === 27) this.props.deactivate(e)
    }
    /**
     * Do the activation stuff
     */
    handleActivated = () => {
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
        // Position absolute tooltip & popover is constrained by the parent width.
        // Set tooltip width to content width to overflow parent bounds
        const contentElement = document.getElementById(this.props.guid)

        if (!contentElement) return // Bail out just in case nothing is found

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
    }
    /**
     * Do the deactivation stuff
     */
    handleDeactivated = () => {
      if (element !== 'drawer') {
        document.removeEventListener('keydown', this.keyHandler)
      }

      if (element === 'dropdown') {
        document.removeEventListener('mouseup', this.clickHandler)
        document.removeEventListener('touchend', this.clickHandler)
      }
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      const THEME = this.context.THEME || {}
      const componentCtx = THEME[name] || {}
      const {
        Content: ContentProp,
        Trigger: TriggerProp,
        activate,
        active,
        as,
        children,
        deactivate,
        guid,
        // YOU SHALL NOT PASS 🙅
        className,
        ...rest
      }: Props = { ...componentCtx, ...this.props }

      // When `State` is used with FaCC pattern, call func with state and change
      // methods
      if (typeof children === 'function')
        return children({ active, activate, deactivate })

      // For elements with mouse events we need to know when the mouse event occurs
      // on the parent element, not the trigger element
      return createElement(
        as || 'div',
        {
          'data-test': element ? `${element}-container` : undefined,
          className:
            classNames(element, componentCtx.className, this.props.className) ||
            undefined,
          onMouseEnter: mouseEvents ? activate : undefined,
          onMouseLeave: mouseEvents ? deactivate : undefined,
          ...rest
        },
        // If shorthand values for Trigger/Content were passed in props, render
        // subcomponents with prop as children
        TriggerProp && <Trigger>{TriggerProp}</Trigger>,
        children || null,
        ContentProp && <Content>{ContentProp}</Content>
      )
    }
  }
