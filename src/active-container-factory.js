import React, { useEffect, useState, useRef } from 'react'
import nanoid from 'nanoid'

import ActiveProvider from './ActiveProvider'
import elem from './elem-factory'
import { closest } from './utils/dom'

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
export default (
  component,
  {
    /** Component name used for classNames */
    name,
    /** When true call deactivate on `esc` keypress */
    escHandler,
    /** When true call deactivate on click outside of element */
    clickHandler,
    /** Default direction for directional elements */
    defaultDirection = null,
    /** When true the state container will register handlers for mouse events */
    defaultMouseEvents = false,
    ...optsRest
  },
) => {
  function ActiveContainer ({
    Content,
    Trigger,
    active,
    children,
    defaultActive = false,
    direction = defaultDirection,
    mouseEvents = defaultMouseEvents,
    size,
    // ---
    activate,
    onActivate,
    onActivated,
    deactivate,
    onDeactivate,
    onDeactivated,
    ...rest
  }) {
      /**
       * Guid instance property will be uniquely assigned once for each component
       * instance, this unique id is then passed through context where it can be used
       * to bind together aria attributes. _(In testing use 'guid' for consistent
       * snapshots.)_
       */
      const guid = useRef(process.env.NODE_ENV === 'test' ? 'guid' : nanoid())

      const [_active, updateActive] = useState(defaultActive)

      /**
     * Internal activation handler (manages active state and fires change
     * listeners)
     */
    const handleActivate = e => {
      if (activate) {
        activate(e)
      } else {
        if (onActivate) onActivate(e)
        // Elements that track an active string id set the id as the target value,
        // if it's present use it otherwise use boolean.
        updateActive(e.target.value || true)
        if (onActivated) onActivated(e)
      }
    }

    /**
     * Internal deactivation handler (manages active state and fires change
     * listeners)
     */
    const handleDeactivate = e => {
      if (deactivate) {
        deactivate(e)
      } else {
        if (onDeactivate) onDeactivate(e)
        updateActive(false)
        if (onDeactivated) onDeactivated(e)
      }
    }

      /**
       * Call deactivate if click event was not inside the element
       */
      const clickHandler = e => {
        if (!closest(e.target, guid)) handleDeactivate(e)
      }

      /**
       * Call deactivate on keypress if `esc` (27) was pressed
       */
      const keyHandler = e => {
        if (e.which === 27) handleDeactivate(e)
      }

      const updateEventListeners = updateType => {
        const updateListener = `${updateType}EventListener`

        if (escHandler) {
          document[updateListener]('keydown', keyHandler)
        }

        if (clickHandler) {
          document[updateListener]('mouseup', clickHandler)
          document[updateListener]('touchend', clickHandler)
        }
      }

      // On ∆ of passed active, update internal state
      // TODO: what's the current behavior with initial render and active?
      // Should this effect skip mount
      useEffect(
        () => {
          if (active !== undefined) updateActive(active)
        },
        [active],
      )

      useEffect(
        () => {
          updateEventListeners(active ? 'add' : 'remove')
          return function cleanup() {
            updateEventListeners('remove')
          }
        },
        [active],
      )

      const activeValues = {
        active: _active,
        activate: this.handleActivate,
        deactivate: this.handleDeactivate,
        guid: this.guid,
      }

      // TODO: only wrap elements with a `div` when the element needs it
      return (
        <ActiveProvider.Provider value={activeValues}>
          {elem({
            'data-id': this.guid,
            classes: [name, direction, { [`${name}-${size}`]: size }],
            // For elements with mouse events we need to know when the mouse event
            // occurs on the parent element, not the trigger element
            onMouseEnter: mouseEvents ? this.handleActivate : undefined,
            onMouseLeave: mouseEvents ? this.handleDeactivate : undefined,
            // If shorthand values for Trigger/Content were passed in props, render
            // subcomponents with prop as children
            children:
              typeof children === 'function' ? (
                children(activeValues) // Handle FaCC syntax
              ) : (
                <>
                  {Trigger && (
                    <ActiveContainer.Trigger>{Trigger}</ActiveContainer.Trigger>
                  )}
                  {children}
                  {Content && (
                    <ActiveContainer.Content>{Content}</ActiveContainer.Content>
                  )}
                </>
              ),
            ...optsRest,
            ...rest,
          })}
        </ActiveProvider.Provider>
      )
    }
  }

  ActiveContainer.defaultProps = {
    defaultActive: false,
  }

  return ActiveContainer
}

/**
 * Prop Types
 * ---
 * // Subcomponent shorthand props
 * Content: node,
 * Trigger: node,
 * // Component props
 * as: oneOfType([func, node, element])
 * children: oneOfType([node, func]),
 * className: string,
 * direction: oneOf(['top', 'right', 'bottom', 'left', 'overlay']),
 * // Active change listeners
 * onActivate: func,
 * onActivated: func,
 * onDeactivate: func,
 * onDeactivated: func,
 * // Passed props to create a controlled component
 * active: bool,
 * defaultActive: oneOfType([bool, string]),
 * activate: func,
 * deactivate: func,
 * mouseEvents: bool,
 */
