// @flow
import React, { Component, createElement } from 'react'
import type { Node, ComponentType } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

import arias from '../utils/arias'
import type { ComponentArias } from '../utils/arias'
import { getTextWidth } from '../utils/dom'

type Options = {
  classes?: string,
  /** Arias to include for component */
  componentArias: ComponentArias,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** The display name for the component, specified for better debugging */
  name: string,
  /** Flag to include the markup for a content tip element */
  tip?: boolean,
  /** When true validate element width does not overflow page on activate */
  widthValidation?: boolean,
}

// TODO: is this fixable?
/* eslint-disable react/no-unused-prop-types */
type Props = {
  // Component props
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
  activeId?: string,
  // Active boolean + change handlers from withActive HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string,
}

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default ({
  classes = '',
  componentArias,
  element = '',
  name,
  tip = false,
  widthValidation = false,
}: Options = {}) =>
  class Content extends Component<Props> {
    static displayName = name
    static contextTypes = { THEME: shape({ [name]: object }) }

    /**
     * Internal cache for width of tooltip content. Set after calculating content
     * width and reused on subsequent renders if content text has not changed.
     */
    contentWidth: number = 0
    /**
     * Internal cache for tooltip content. Used to check if the content has changed
     * between showings of tooltip.
     */
    content: string = ''

    // Hooks
    // ---------------------------------------------------------------------------
    componentDidMount() {
      if (widthValidation && this.props.active) this.validateWidth()
    }

    componentDidUpdate() {
      if (widthValidation && this.props.active) this.validateWidth()
    }

    // Methods
    // ---------------------------------------------------------------------------
    /** Check width and update the styles for display */
    validateWidth() {
      // Position absolute tooltip & popover is constrained by the parent width.
      // Set tooltip width to content width to overflow parent bounds
      const contentElement = document.getElementById(this.props.guid)
      if (!contentElement) return // Bail out just in case nothing is found

      const content = contentElement.innerText || ''
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

    render() {
      const THEME = this.context.THEME || {}
      const componentCtx = THEME[name] || {}
      const {
        active,
        // $FlowFixMe
        as,
        children,
        guid,
        activeId = '',
        // YOU SHALL NOT PASS 🙅
        className,
        activate,
        deactivate,
        ...rest
      }: Props = { ...componentCtx, ...this.props }

      return createElement(
        as || 'div',
        {
          'data-test': element ? `${element}-content` : undefined,
          ...arias({
            guid,
            active,
            ...componentArias,
            // Mutli-active elems have different arias to handle multiple show/hide
            // elements. The passed id is used for trigger and content components,
            // these arias will override the standard componentArias
            ...(activeId
              ? {
                  active: activeId === active,
                  id: `${activeId}-content`,
                  labelledby: `${activeId}-trigger`,
                  hidden: true,
                }
              : {}),
          }),
          className:
            classNames(classes, componentCtx.className, this.props.className, {
              [`${element}-content`]: element,
            }) || undefined,
          ...rest,
        },
        tip && (
          <div className="tip-container">
            <div className="tip" />
          </div>
        ),
        children,
      )
    }
  }
