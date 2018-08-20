// @flow
import React, { Fragment, type Node } from 'react'
import elem from './elem-factory'
import Button from './Button/Button'
import ariasComputer, { type ComponentArias } from './utils/arias'

type Options = {
  /** Arias to include for component */
  arias: ComponentArias,
  /** Custom trigger static classes */
  classes?: string,
  /** Name of element, used for classes and handler selection */
  element: string,
  /** The display name for the component, specified for better debugging */
  // name: string,
  /** If the trigger can act as a toggle vs activate only */
  triggerType?: 'activate' | 'deactivate',
}

type Props = {
  children?: Node,
  decoration?: boolean | Node,
  link?: boolean,
  activeId?: string,
  // Active boolean + change handlers from withActive HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string,
}

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 */
export default ({ arias, classes, element, triggerType }: Options = {}) => ({
  activate,
  active,
  activeId = '',
  children,
  deactivate,
  decoration,
  guid,
  ...rest
}: Props) => {
  let onClick
  if (triggerType) {
    onClick = triggerType === 'activate' ? activate : deactivate
  } else if (activeId) {
    onClick = activeId === active ? deactivate : activate
  } else {
    onClick = active ? deactivate : activate
  }

  return elem({
    defaultAs: Button,
    ...ariasComputer({
      active,
      activeId,
      guid,
      type: 'trigger',
      arias,
    }),
    classes: [
      classes,
      {
        // For mutli-active triggers add active if the trigger is selected
        active: activeId && active === activeId,
        // TODO: rename to element-trigger
        [`${element}-toggle`]: element,
      },
    ],
    onClick,
    // For multi-active elems, the value is used in `withState` to handle
    // changing the active id
    value: activeId || undefined,
    children: (
      <Fragment>
        {children}
        {decoration}
      </Fragment>
    ),
    // Pass through props rest last to allow any instance overrides
    ...rest,
  })
}
