import React, { Fragment } from 'react'
import elem from './elem-factory'
import ariasComputer from './utils/arias'
import { btnClasses, cleanBtnClasses } from './Button/Button'

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 * Componentry sets up triggers to be anchor style buttons by default, this
 * can be overridden by passing an as, type and anchor to reset the defaults.
 */
export default ({ arias, classes, triggerType, btnStyles = true } = {}) => ({
  activate,
  active,
  activeId = '',
  children,
  deactivate,
  decoration,
  guid,
  anchor = true, // toggles btn-anchor utility class
  ...rest
}) => {
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

  const isAnchor = !!rest.href

  return elem({
    defaultAs: isAnchor ? 'a' : 'button',
    type: isAnchor ? undefined : 'button',
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
