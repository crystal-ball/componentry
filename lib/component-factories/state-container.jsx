// @flow
import { Component, createElement } from 'react'
import type { ComponentType, Node } from 'react'
import classNames from 'classnames'

import { closest, getTextWidth } from '../utils/dom'

type Options = {
  /**
   * Name of element, used for classes and handler selection
   */
  element: string,
  /**
   * When tue the state container will register handlers for mouse events
   */
  mouseEvents?: boolean
}

type Props = {
  // Component props
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
  // Active boolean + change handlers
  active: boolean,
  activate: Function,
  deactivate: Function,
  guid: string
}

export default ({ element, mouseEvents }: Options) =>
  class StateContainer extends Component<Props> {
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
    componentWillReceiveProps({ active }: { active: boolean }) {
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
    clickHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
      if (!closest(e.target, element)) this.props.deactivate(e)
    }
    /**
     * Call deactivate on keypress if `esc` (27) was pressed
     */
    keyHandler = (e: SyntheticKeyboardEvent<>) => {
      if (e.which === 27) this.props.deactivate(e)
    }
    /**
     * Do the activation stuff
     */
    handleActivated = () => {
      // Don't close drawers on `esc`
      if (element !== 'drawer') {
        // $FlowFixMe
        document.addEventListener('keydown', this.keyHandler)
      }

      // Add click outside container handlers for dropdowns only
      if (element === 'dropdown') {
        // $FlowFixMe
        document.addEventListener('mouseup', this.clickHandler)
        // $FlowFixMe
        document.addEventListener('touchend', this.clickHandler)
      }

      if (element === 'tooltip' || element === 'popover') {
        // Position absolute tooltip is constrained by the parent width. Set tooltip
        // width to content width to overflow parent bounds
        const contentElement = document.getElementById(this.props.guid)
        // $FlowFixMe
        const content = contentElement.innerText
        this.content = content

        if (content === this.content && this.contentWidth) {
          // If width has already been calculated and content has not changed, use
          // cached width for performance
          // $FlowFixMe
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

          // $FlowFixMe
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
        // $FlowFixMe
        document.removeEventListener('keydown', this.keyHandler)
      }

      if (element === 'dropdown') {
        // $FlowFixMe
        document.removeEventListener('mouseup', this.clickHandler)
        // $FlowFixMe
        document.removeEventListener('touchend', this.clickHandler)
      }
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      const {
        active,
        as,
        activate,
        deactivate,
        children,
        className,
        guid,
        ...rest
      } = this.props

      // For elements with mouse events we need to know when the mouse event occurs
      // on the parent element, not the trigger element
      // $FlowFixMe
      return createElement(
        as || 'div',
        {
          'data-test': element ? `${element}-container` : null,
          className: classNames(element, className),
          onMouseEnter: mouseEvents ? activate : undefined,
          onMouseLeave: mouseEvents ? deactivate : undefined,
          // DO NOT PASS STATE PROPS THROUGH (SEE DECONSTRUCTION)!
          ...rest
        },
        children
      )
    }
  }

/* <As className={className} {...dom}>
  {Trigger &&
    <ToggleTrigger
      active={active}
      arias={triggerArias}
      elementType={elementType}
      guid={guid}
      toggleActive={toggleActive}
    >
      {Trigger}
    </ToggleTrigger>}
  {this.renderChildren(children, active)}
  {Content &&
    <ToggleContent
      active={active}
      arias={contentArias}
      elementType={elementType}
      guid={guid}
    >
      {Content}
    </ToggleContent>}
</As> */
