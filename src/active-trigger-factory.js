import React, { useContext } from 'react'
import elem from './elem-factory'
import { ActiveCtx } from './active-container-factory'
import { useTheme } from './Theme/Theme'
import { arias as gnArias, targetClassNames } from './utils/componentry'

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
    displayName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}Trigger}`,
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
      ...opts,
      ...useTheme(displayName),
      ...useContext(ActiveCtx),
      ...props,
    }

    // If variant className isn't set, default to `a` unless the `button`
    // shorthand switch was passed
    rest.variant = rest.variant || (rest.button ? 'btn' : 'a')

    const componentClassNames = targetClassNames(rest)

    // Clear component props that are also library props
    rest.color = null
    rest.size = null

    // Handle determining whether to call activate or deactivate on click
    // 1. If a trigger type was passed, call that event always
    // 2. else if using multi-active container check if this active id is active
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
        componentClassNames,
        // For mutli-active triggers add active if the trigger is selected
        { active: activeId && active === activeId },
      ],
      onClick,
      // For multi-active elems, the value is used in `withState` to handle
      // changing the active id
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
