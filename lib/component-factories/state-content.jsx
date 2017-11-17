// @flow
import React, { createElement } from 'react'
import type { Node, ComponentType } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

import arias from '../utils/arias'
import type { ComponentArias } from '../utils/arias'

type Options = {
  classes?: string,
  /** Arias to include for component */
  componentArias: ComponentArias,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** The display name for the component, specified for better debugging */
  name: string,
  /** Flag to include the markup for a content tip element */
  tip?: boolean
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
  guid: string
}

type Context = { [string]: { [string]: any } }

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default (
  { classes = '', componentArias, element = '', name, tip = false }: Options = {}
) => {
  const Content = (props: Props, { THEME = {} }: Context) => {
    const componentCtx = THEME[name] || {}
    const {
      active,
      as,
      children,
      guid,
      activeId = '',
      // YOU SHALL NOT PASS 🙅
      activate,
      className,
      deactivate,
      ...rest
    }: Props = { ...componentCtx, ...props }

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
                hidden: true
              }
            : {})
        }),
        className:
          classNames(classes, componentCtx.className, props.className, {
            [`${element}-content`]: element
          }) || undefined,
        ...rest
      },
      tip && (
        <div className="tip-container">
          <div className="tip" />
        </div>
      ),
      children
    )
  }

  Content.displayName = name
  Content.contextTypes = { THEME: shape({ [name]: object }) }
  return Content
}
