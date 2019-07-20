import elem from './elem-factory'
import ariasComputer from './utils/arias'
import { btnClasses, cleanBtnClasses } from './Button/Button'
import { useActive } from './Active/useActive'
import { useTheme } from './Theme/Theme'

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 * Componentry sets up triggers to be anchor style buttons by default, this
 * can be overridden by passing an as, type and anchor to reset the defaults.
 */
export default function activeTriggerFactory(
  component,
  {
    // Switch to set default anchor value
    defaultAnchor = true,
    // Map of aria attributes to render with component
    arias = {},
    // The base css class for this component
    baseClass = `${component}-trigger`,
    // Switch to include button classes
    btnStyles = true,
    // The component name used for display and theme lookups
    name = `${component.slice(0, 1).toUpperCase()}${component.slice(1)}Trigger}`,
    // Overrides component onClick to specified activate/deactivate event
    triggerType,
  } = {},
) {
  function ActiveTrigger(props) {
    const {
      children,
      anchor = defaultAnchor,
      decoration,
      guid,
      // --- Active controls
      active,
      activeId,
      activate,
      deactivate,
      ...rest
    } = { ...useTheme(name), ...useActive(), ...props }

    // Handle determining whether to call activate or deactivate on click
    // 1. If a trigger type was passed, call that event always
    // 2. else if using multi-active container check if this active id is active
    // 3. else use opposite of active status
    let onClick
    if (triggerType) onClick = triggerType === 'activate' ? activate : deactivate
    else if (activeId) onClick = activeId === active ? deactivate : activate
    else onClick = active ? deactivate : activate

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
      classes: [
        baseClass,
        // For mutli-active triggers add active if the trigger is selected
        { active: activeId && active === activeId },
        btnStyles ? btnClasses({ anchor, ...rest }) : null,
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
      ...cleanBtnClasses(rest),
    })
  }
  ActiveTrigger.displayName = name
  return ActiveTrigger
}
