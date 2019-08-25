import React from 'react'
import elem from './elem-factory'
import ariasComputer from './utils/arias'
import { useActive } from './Active/Active'
import { useTheme } from './Theme/Theme'
import { targetClassNames } from './utils/componentry'

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 * Componentry sets up triggers to be anchor style buttons by default, this
 * can be overridden by passing an as, type and anchor to reset the defaults.
 */
export default function activeTriggerFactory(
  component,
  {
    // Switch to set default anchor value
    variantDefault = 'anchor',
    // Map of aria attributes to render with component
    arias = {},
    // The base css class for this component
    // TODO: how does this relate to variant??
    baseClass = `${component}-trigger`,
    // The component name used for display and theme lookups
    name = `${component.slice(0, 1).toUpperCase()}${component.slice(1)}Trigger}`,
    // Overrides component onClick to specified activate/deactivate event
    triggerType,
  } = {},
) {
  function ActiveTrigger(props) {
    const {
      children,
      decoration,
      guid,
      // --- Active controls
      active,
      activeId,
      activate,
      deactivate,
      ...rest
    } = {
      as: 'button',
      type: 'button',
      variant: variantDefault,
      ...useTheme(name),
      ...useActive(),
      ...props,
    }

    // Remap target color prop to differentiate from library text color prop
    rest.targetColor = rest.color
    rest.color = null

    // Handle determining whether to call activate or deactivate on click
    // 1. If a trigger type was passed, call that event always
    // 2. else if using multi-active container check if this active id is active
    // 3. else use opposite of active status
    let onClick
    if (triggerType) onClick = triggerType === 'activate' ? activate : deactivate
    else if (activeId) onClick = activeId === active ? deactivate : activate
    else onClick = active ? deactivate : activate

    return elem({
      ...ariasComputer({
        active,
        activeId,
        guid,
        type: 'trigger',
        arias,
      }),
      componentClassNames: [
        targetClassNames(rest),
        // For mutli-active triggers add active if the trigger is selected
        { active: activeId && active === activeId },
        baseClass,
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
  ActiveTrigger.displayName = name
  return ActiveTrigger
}
