// @flow
import React, { createElement } from 'react'
import type { Node, ComponentType } from 'react'
import classNames from 'classnames'

import arias from '../utils/arias'
import type { ComponentArias } from '../utils/arias'

type Options = {
  classes?: string,
  /** Arias to include for component */
  componentArias: ComponentArias,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** Flag to include the markup for a content tip element */
  tip?: boolean
}

type Props = {
  // Component props
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
  tabId?: string,
  // Active boolean + change handlers from withActive HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string
}

/**
 * Factory returns custom `<Content />` components defined by the options.
 * Content components handle setting correct aria attributes and markup
 */
export default (
  { classes = '', componentArias, element = '', tip = false }: Options = {}
) => ({
  activate,
  active,
  as,
  children,
  className,
  deactivate,
  guid,
  tabId = '',
  ...rest
}: Props) =>
  createElement(
    as || 'div',
    {
      'data-test': element ? `${element}-content` : null,
      ...arias({
        guid,
        active,
        ...componentArias,
        // Tabs have different arias to handle multiple show/hide elements. The
        // passed id is used for trigger and content components, these arias will
        // override the standard componentArias
        ...(tabId
          ? {
              active: tabId === active,
              id: `${tabId}-content`,
              labelledby: `${tabId}-tab`,
              hidden: true
            }
          : {})
      }),
      className: classNames(className, classes, {
        [`${element}-content`]: element
      }),
      // DO NOT PASS STATE PROPS THROUGH (SEE DECONSTRUCTION)!
      ...rest
    },
    tip && (
      <div className="tip-container">
        <div className="tip" />
      </div>
    ),
    children
  )
