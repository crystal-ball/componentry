// @flow
import React, { Fragment, type Node } from 'react'
import elem from './elem-factory'
import ariasComputer, { type ComponentArias } from './utils/arias'
import { cleanActive } from './utils/clean-props'

type Options = {
  classes?: string,
  /** Arias to include for component */
  arias: ComponentArias,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** Popper elements are tooltips and popovers, they include extra markup */
  popper?: boolean,
}

type Props = {
  children?: Node,
  activeId?: string,
  // withActive props
  active: boolean,
  guid: string,
}

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default ({ arias, classes = '', element = '', popper = false }: Options = {}) => ({
  active,
  children,
  guid,
  activeId = '',
  ...rest
}: Props) => {
  // Create component content (return optionally wraps content in a width busting
  // container)
  const ComponentContent = elem({
    'data-test': element ? `${element}-content` : undefined,
    ...ariasComputer({
      active,
      activeId,
      guid,
      type: 'content',
      arias,
    }),
    classes: [
      classes,
      {
        [`${element}-content`]: element,
      },
    ],
    // Pass through props rest last to allow any instance overrides
    ...cleanActive(rest),
    children: (
      <Fragment>
        {popper && (
          <div className="tip-container">
            <div className="tip" />
          </div>
        )}
        {children}
      </Fragment>
    ),
  })

  // If the element is a popper, wrap it in a content container, this is used to
  // bust width of parent element
  return popper ? (
    <div className={`${element}-content-container`}>{ComponentContent}</div>
  ) : (
    ComponentContent
  )
}
