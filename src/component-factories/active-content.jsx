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
  /** Popper elements are tooltips and popovers, they include extra markup */
  popper?: boolean,
}

// TODO: is this fixable?
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
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

type Context = { [string]: { [string]: any } }

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default ({
  classes = '',
  componentArias,
  element = '',
  name,
  popper = false,
}: Options = {}) => {
  const Content = (props: Props, { THEME = {} }: Context) => {
    const componentCtx = THEME[name] || {}
    const {
      active,
      // $FlowFixMe
      as,
      children,
      className,
      guid,
      activeId = '',
      // YOU SHALL NOT PASS 🙅
      activate,
      deactivate,
      ...rest
    }: Props = { ...componentCtx, ...props }

    // Create component content (return optionally wraps content in a width busting
    // container)
    const ComponentContent = createElement(
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
          classNames(classes, componentCtx.className, className, {
            [`${element}-content`]: element,
          }) || undefined,
        ...rest,
      },
      popper && (
        <div className="tip-container">
          <div className="tip" />
        </div>
      ),
      children,
    )

    // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element
    return popper ? (
      <div className={`${element}-content-container`}>{ComponentContent}</div>
    ) : (
      ComponentContent
    )
  }

  Content.displayName = name
  Content.contextTypes = { THEME: shape({ [name]: object }) }

  return Content
}
