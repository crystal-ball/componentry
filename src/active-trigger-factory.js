import React, { useContext } from 'react'
import elem from './elem-factory'
import { ActiveCtx } from './active-container-factory'
import { useTheme } from './Theme/Theme'
import { arias as gnArias, actionClasses } from './utils/componentry'

/**
 * Factory returns custom `<Trigger />` components defined by the fn options.
 * Componentry sets up triggers to be anchor style buttons by default, this
 * can be overridden by passing an as, type and anchor to reset the defaults.
 */
export default function activeTriggerFactory(
  name,
  {
    // Map of aria attributes to render with component
    arias = {},
    // Component name className
    baseClass = `${name}-trigger`,
    // Theme lookups and component display name
    displayName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}Trigger`,
    // Overrides component onClick to specified activate/deactivate event
    triggerType,
    ...opts
  } = {},
) {
  function ActiveTrigger(props) {
    const {
      // --- Render elements
      children,
      decoration,
      // --- Active controls
      guid,
      active,
      activeId,
      activate,
      deactivate,
      ...rest
    } = {
      as: 'button',
      type: 'button',
      variant: 'a',
      ...opts,
      ...useTheme(displayName),
      ...useContext(ActiveCtx),
      ...props,
    }

    // Handle determining whether to call activate or deactivate on click
    // 1. If a trigger type was passed, call that event always
    // 2. else if in a compound-active context check if this activeId is active
    // 3. else use opposite of active status
    let onClick
    if (triggerType) onClick = triggerType === 'activate' ? activate : deactivate
    else if (activeId) onClick = activeId === active ? deactivate : activate
    else onClick = active ? deactivate : activate

    return elem({
      ...gnArias({
        active,
        activeId,
        guid,
        type: 'trigger',
        arias,
      }),
      componentClassNames: [
        baseClass,
        actionClasses(rest),
        // For compound-active contexts add an active class if activeIds match
        // (eg in tabs show which tab is selected)
        { active: activeId && active === activeId },
      ],
      onClick,
      // For compound-active contexts, the value attr is to expose the activeId
      value: activeId,
      children: (
        <>
          {children}
          {decoration}
        </>
      ),
      // Pass through props rest last to allow any instance overrides
      ...rest,
    })
  }
  ActiveTrigger.displayName = displayName
  return ActiveTrigger
}
