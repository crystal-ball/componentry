import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { useTheme } from '../Theme/Theme'
import { ActiveContainerBaseProps } from './types'
import { parseBaseCx } from './class-names'
import { closest } from './dom'
import { element } from './element-creator'

// --------------------------------------------------------
// Container context

export interface ActiveContext {
  /** Multi content active components use an active id string */
  active: boolean | string
  /** Unique ide for this context */
  guid: string
  /** Called on activate events */
  activate: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Called on deactivate events */
  deactivate: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/** Active context */
export const ActiveCtx = createContext<ActiveContext>({
  active: false,
  guid: 'DEFAULT',
  activate: () => {
    /* default noop handler simplifies consuming code */
  },
  deactivate: () => {
    /* default noop handler simplifies consuming code */
  },
})

// --------------------------------------------------------
// Container builder

interface DefaultActiveContainerProps {
  /** Includes click events handler */
  clickEvents?: boolean
  /** Default content placement direction */
  direction?: 'top' | 'left' | 'right' | 'bottom'
  /** Include esc events handler */
  escEvents?: boolean
  /** Includes mouse events handler */
  mouseEvents?: boolean
}

/**
 * Factory returns custom `<Active />` components defined by the options. Active
 * components are responsible for:
 *
 * 1. Creating a scoped `active` value (type boolean for single set of
 *    action+content, string for set of actions+content).
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
export function activeContainerBuilder<TProps extends ActiveContainerBaseProps>(
  displayName: string,
  defaultProps: DefaultActiveContainerProps = {},
): React.FC<TProps> {
  const baseCx = parseBaseCx(displayName)

  function ActiveContainer(props: TProps) {
    const {
      // --- Render elements
      Action,
      Content,
      children,

      // --- Behavior configurations
      direction = '',
      size,

      // --- Events configuration
      clickEvents = false,
      escEvents = false,
      mouseEvents = false,

      // --- Active controls
      active,
      defaultActive = false,
      activate,
      deactivate,
      onActivate,
      onActivated,
      onDeactivate,
      onDeactivated,
      ...rest
    } = { ...defaultProps, ...useTheme<TProps>(displayName), ...props }

    /**
     * Guid instance property will be uniquely assigned once for each component
     * instance, this unique id is then passed through context where it can be used
     * to bind together aria attributes. _(In testing use 'guid' for consistent
     * snapshots.)_
     */
    const { current: guid } = useRef(nanoid())

    /**
     * Internally the container keeps a separate active state variable
     */
    const [_active, updateActive] = useState(defaultActive)

    // --------------------------------------------------------
    // Handlers

    /**
     * Internal activation handler (manages active state and fires change
     * listeners)
     */
    const handleActivate =
      activate ||
      function _activate(e) {
        if (onActivate) onActivate(e)
        // Compound active elements pass along the active id with a data attr
        // fallback to boolean value if not present
        // @ts-ignore not sure how to type this yet
        updateActive(e.target.dataset.activeId || true)
        if (onActivated) onActivated(e)
      }

    /**
     * Internal deactivation handler (manages active state and fires change
     * listeners)
     */
    const handleDeactivate = useCallback(
      (evt) => {
        if (deactivate) {
          deactivate(evt)
        } else {
          if (onDeactivate) onDeactivate(evt)
          updateActive(false)
          if (onDeactivated) onDeactivated(evt)
        }
      },
      [deactivate, onDeactivate, onDeactivated],
    )

    /** Call deactivate if click event was not inside the element */
    const onClick = useCallback(
      (e) => {
        if (!closest(e.target, guid)) handleDeactivate(e)
      },
      [guid, handleDeactivate],
    )

    /** Call deactivate on keypress if `esc` (27) was pressed */
    const onKeydown = useCallback(
      (e) => {
        if (e.which === 27 || e.code === 27) handleDeactivate(e)
      },
      [handleDeactivate],
    )

    /** Handle adding/removing the component DOM event listeners */
    const updateEventListeners = useCallback(
      (updateType: 'add' | 'remove') => {
        // TODO: how to type updateListener about without a type assertion
        const updateListener = `${updateType}EventListener` as
          | 'addEventListener'
          | 'removeEventListener'

        if (escEvents) document[updateListener]('keydown', onKeydown)

        if (clickEvents) {
          // TODO: are these the best events to listen to??
          document[updateListener]('mouseup', onClick)
          document[updateListener]('touchend', onClick)
        }
      },
      [clickEvents, escEvents, onClick, onKeydown],
    )

    // --------------------------------------------------------
    // Effects

    // When active is passed as a prop, it should always be used as active state
    useEffect(() => {
      if (active !== undefined) updateActive(active)
    }, [active])

    // On every change of internal _active state, call updateEventListeners
    // with add/remove to reflect if the component is active
    useEffect(() => {
      updateEventListeners(_active ? 'add' : 'remove')
      return function cleanup() {
        updateEventListeners('remove')
      }
    }, [_active, updateEventListeners])

    // --------------------------------------------------------
    // Render

    const activeValues = {
      active: _active,
      activate: handleActivate,
      deactivate: handleDeactivate,
      guid,
    }

    // TODO: only wrap elements with a `div` when the element needs it
    return (
      <ActiveCtx.Provider value={activeValues}>
        {element(displayName, {
          'data-id': guid,
          'componentCx': {
            [`${baseCx}-${size}`]: size,
            [direction]: direction,
          },
          // For elements with mouse events we need to know when the mouse event
          // occurs on the parent element, not the action element
          'onMouseEnter': mouseEvents ? handleActivate : undefined,
          'onMouseLeave': mouseEvents ? handleDeactivate : undefined,

          // Handle render patterns
          'children':
            typeof children === 'function' ? (
              children(activeValues) // Handle FaCC syntax
            ) : (
              <>
                {/* @ts-ignore Not sure how to type this yet */}
                {Action && <ActiveContainer.Action>{Action}</ActiveContainer.Action>}
                {children}
                {/* @ts-ignore Not sure how to type this yet */}
                {Content && <ActiveContainer.Content>{Content}</ActiveContainer.Content>}
              </>
            ),
          ...rest,
        })}
      </ActiveCtx.Provider>
    )
  }
  ActiveContainer.displayName = displayName
  return ActiveContainer
}
