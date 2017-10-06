import React, { Component } from 'react'
import { bool, func, node, string, oneOfType } from 'prop-types'
import classNames from 'classnames'

import cleanProps from '../utils/clean-props'
import { closest, getTextWidth } from '../utils/dom'

const stateContainerFactory = ({ element, mouseEvents }) =>
  class StateContainer extends Component {
    static propTypes = {
      // Component props
      As: oneOfType([func, node]),
      children: node,
      className: string,
      'data-test': string,
      // Active boolean + change handlers
      active: bool.isRequired,
      activate: func.isRequired,
      deactivate: func.isRequired,
      guid: string.isRequired,
      // Component Hooks
      onActivate: func,
      onActivated: func,
      onDeactivate: func,
      onDeactivated: func
    }

    static defaultProps = {
      As: 'div',
      'data-test': `${element}-container`
    }

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
    componentWillReceiveProps({ active }) {
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
    clickHandler = e => {
      if (!closest(e.target, element)) this.props.deactivate(e)
    }
    /**
     * Call deactivate on keypress if `esc` (27) was pressed
     */
    keyHandler = e => {
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
        // Position absolute tooltip is constrained by the parent width. Set tooltip
        // width to content width to overflow parent bounds
        const contentElement = document.getElementById(this.props.guid)
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
      const { As, activate, deactivate, children, className, ...rest } = this.props
      const dom = cleanProps(rest, ['active', 'guid'])

      // For elements with mouse events we need to know when the mouse event occurs
      // on the parent element, not the trigger element
      return (
        <As
          className={classNames(element, className)}
          onMouseEnter={mouseEvents ? activate : undefined}
          onMouseLeave={mouseEvents ? deactivate : undefined}
          {...dom}
        >
          {children}
        </As>
      )
    }
  }

export default stateContainerFactory

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
