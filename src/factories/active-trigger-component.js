import React, { useContext } from 'react'
import { useTheme } from '../Theme/Theme'
import { elemArias } from '../utils/componentry'
import { ActiveCtx } from './active-container-component'
import { element } from './element'

/**
 * Factory returns custom `<Trigger />` components defined by the fn options.
 * Componentry sets up triggers to be buttons styled as links by default, this
 * can be overridden by passing an as and type props for an anchor.
 * @property {string} name Component display name
 * @property {Object} opts
 * @property {Object} opts.arias
 * @property {string} opts.baseClass
 * @property {string} opts.displayName
 * @property {string} opts.displayName
 * @returns {import('react').FunctionComponent<any>}
 */
export function activeTriggerComponent(
  name,
  {
    // Map of aria attributes to render with component
    arias = {},
    // Theme lookups and component display name
    displayName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}Trigger`,
    // Overrides component onClick to specified activate/deactivate action
    action,
    ...opts
  } = {},
) {
  function ActiveTrigger(props) {
    const {
      as = 'button',
      baseClass = `${name}-action`,
      type = 'button',
      variant = 'primary',
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
    if (action) onClick = action === 'activate' ? activate : deactivate
    else if (activeId) onClick = activeId === active ? deactivate : activate
    else onClick = active ? deactivate : activate

    return element({
      as,
      type,
      ...elemArias({
        active,
        activeId,
        guid,
        type: 'trigger',
        arias,
      }),
      componentCx: {
        [baseClass]: true,
        [`${baseClass}-${variant}`]: true,
        // For compound-active contexts add an active class if activeIds match
        // (eg in tabs show which tab is selected)
        active: activeId && active === activeId,
      },
      onClick,
      // For compound-active contexts, the value attr is to expose the activeId
      value: activeId,
      /* inputs cannot have children */
      children:
        as === 'input' ? null : (
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
