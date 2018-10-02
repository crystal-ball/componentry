import React, { Fragment, type Node } from 'react'
import elem from './elem-factory'
import ariasComputer, { type ComponentArias } from './utils/arias'
import { btnClasses, cleanBtnClasses } from './Button/Button'

type Options = {
  /** Arias to include for component */
  arias: ComponentArias,
  /** Custom trigger static classes */
  classes?: string,
  /** If the trigger can act as a toggle vs activate only */
  triggerType?: 'activate' | 'deactivate',
}

type Props = {
  children?: Node,
  decoration?: boolean | Node,
  activeId?: string,
  // Active boolean + change handlers from withActive HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string,
  /** Toggles `btn-anchor` utility class to style button as an anchor */
  anchor: boolean,
}

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 * Componentry sets up triggers to be anchor style buttons by default, this
 * can be overridden by passing an as, type and anchor to reset the defaults.
 */
export default ({ arias, classes, triggerType, btnStyles = true }: Options = {}) => ({
  activate,
  active,
  activeId = '',
  children,
  deactivate,
  decoration,
  guid,
  anchor = true,
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

  // For mutli-active triggers add active if the trigger is selected
  const classNames = [classes, { active: activeId && active === activeId }]
  if (btnStyles) classNames.push(btnClasses({ anchor, ...rest }))

  return elem({
    defaultAs: 'button',
    type: 'button',
    ...ariasComputer({
      active,
      activeId,
      guid,
      type: 'trigger',
      arias,
    }),
    classes: classNames,
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
    ...cleanBtnClasses(rest),
  })
}
