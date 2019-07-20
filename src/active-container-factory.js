import React, { useEffect, useState, useRef } from 'react'
import nanoid from 'nanoid'

import ActiveProvider from './Active/Context'
import elem from './elem-factory'
import { closest } from './utils/dom'
import { useTheme } from './Theme/Theme'

/**
 * Factory returns custom `<Active />` components defined by the options. Active
 * components are responsible for:
 *
 * 1. Creating a scoped `active` value (type boolean for single set of
 *    trigger+content, string for set of triggers+content).
 * 2. Exposing internal `activate` and`deactivate` methods for changing `active`
 *    state.
 * 3. On `active` change add or remove configured event listeners and fire
 *    change listeners.
 *
 * NOTE: The `handleActivate` and `handleDeactivate` methods are passed through
 * context as the `activate` and `deactivate` handlers for subcomponents to _always_
 * use. This ensures that we can always hook into the change events for internal
 * needs like setting or removing special event listeners.
 */
export default function activeContainerFactory(
  component,
  {
    /** When true call deactivate on `esc` keypress */
    escHandler = false,
    /** When true call deactivate on click outside of element */
    clickHandler = false,
    /** When true the state container will register handlers for mouse events */
    mouseHandler = false,
    /** Default direction for directional elements */
    defaultDirection = null,
    // Escape hatch to pass addl props to component instance
    ...optsRest
  } = {},
) {
  const themeName = `${component.slice(0, 1).toUpperCase()}${component.slice(1)}}`
  function ActiveContainer(props) {
    const {
      // --- Render elements
      Content, // node
      Trigger, // node
      children,
      // --- Behavior configurations
      direction = defaultDirection, // 'top', 'right', 'bottom', 'left', 'overlay'
      mouseEvents = mouseHandler, // bool
      size, // 'sm', 'lg'
      // --- Active controls
      active,
      defaultActive = false, // bool OR string
      activate,
      onActivate,
      onActivated,
      deactivate,
      onDeactivate,
      onDeactivated,
      ...rest
    } = { ...useTheme(themeName), ...props }

    /**
     * Guid instance property will be uniquely assigned once for each component
     * instance, this unique id is then passed through context where it can be used
     * to bind together aria attributes. _(In testing use 'guid' for consistent
     * snapshots.)_
     */
    const guid = useRef(process.env.NODE_ENV === 'test' ? 'guid' : nanoid())

    const [_active, updateActive] = useState(defaultActive)

    // When active is passed as a prop, it should always be used as active state
    useEffect(() => {
      if (active !== undefined) updateActive(active)
    }, [active])

    /**
     * Internal activation handler (manages active state and fires change
     * listeners)
     */
    const handleActivate =
      activate ||
      function _activate(e) {
        if (onActivate) onActivate(e)
        // Elements that track an active string id set the id as the target value,
        // if it's present use it otherwise use boolean.
        updateActive(e.target.value || true)
        if (onActivated) onActivated(e)
      }

    /**
     * Internal deactivation handler (manages active state and fires change
     * listeners)
     */
    const handleDeactivate =
      deactivate ||
      function _deactivate(e) {
        if (onDeactivate) onDeactivate(e)
        updateActive(false)
        if (onDeactivated) onDeactivated(e)
      }

    /** Call deactivate if click event was not inside the element */
    const onClick = e => {
      if (!closest(e.target, guid.current)) handleDeactivate(e)
    }

    /** Call deactivate on keypress if `esc` (27) was pressed */
    const onKeydown = e => {
      if (e.which === 27) handleDeactivate(e)
    }

    const updateEventListeners = updateType => {
      const updateListener = `${updateType}EventListener`

      if (escHandler) document[updateListener]('keydown', onKeydown)

      if (clickHandler) {
        document[updateListener]('mouseup', onClick)
        document[updateListener]('touchend', onClick)
      }
    }

    useEffect(() => {
      updateEventListeners(_active ? 'add' : 'remove')
      return function cleanup() {
        updateEventListeners('remove')
      }
    }, [active])

    const activeValues = {
      active: _active,
      activate: handleActivate,
      deactivate: handleDeactivate,
      guid: guid.current,
    }

    const element = component.slice(0, 1).toLowerCase() + component.slice(1)

    // TODO: only wrap elements with a `div` when the element needs it
    return (
      <ActiveProvider.Provider value={activeValues}>
        {elem({
          'data-id': guid.current,
          classes: [element, direction, { [`${element}-${size}`]: size }],

          // For elements with mouse events we need to know when the mouse event
          // occurs on the parent element, not the trigger element
          onMouseEnter: mouseEvents ? handleActivate : undefined,
          onMouseLeave: mouseEvents ? handleDeactivate : undefined,

          // Handle render patterns
          children:
            typeof children === 'function' ? (
              children(activeValues) // Handle FaCC syntax
            ) : (
              <>
                {Trigger && <ActiveContainer.Trigger>{Trigger}</ActiveContainer.Trigger>}
                {children}
                {Content && <ActiveContainer.Content>{Content}</ActiveContainer.Content>}
              </>
            ),
          ...optsRest,
          ...rest,
        })}
      </ActiveProvider.Provider>
    )
  }
  ActiveContainer.displayName = themeName
  return ActiveContainer
}
