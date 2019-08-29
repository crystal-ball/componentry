import { createContext, useContext, useEffect, useState } from 'react'

/**
 * Active context
 */
const ActiveCtx = createContext({ active: false })
export default ActiveCtx

/**
 * Components that need transitional active and visible states will use the
 * Consumer to access the activeCtx, and pass Wrapped into the ActiveTransition
 * component, which uses state to manage passing active and visible according
 * to the transition duration for that component.
 */

export const useActive = () => useContext(ActiveCtx)

/**
 * Hook handles transitioning display and opacity using active and visible
 * state using the following rules:
 *
 * - Show: Set active true to display element, then set visible true to
 *   transition element opacity using css transitions
 * - Hide: Set visible false to start element opacity using css transitions,
 *   then after transition duration set active false to set display none
 */
export const useVisible = (active, duration = 300) => {
  // ℹ️ Although the timeout used is very short, it's possible that a component
  // could be unmounted before it's run -> so we keep a reference to the timeout
  // that we can cleanup
  const [state, updateState] = useState({ active, visible: active })

  useEffect(() => {
    let timer
    if (active) {
      updateState({ active: true, visible: false })
      timer = setTimeout(() => {
        updateState({ active: true, visible: true })
        timer = null
      }, 17)
    } else {
      updateState({ active: true, visible: false })
      timer = setTimeout(() => {
        updateState({ active: false, visible: false })
        timer = null
      }, duration)
    }

    return function cleanup() {
      clearTimeout(timer)
    }
  }, [active])

  return state
}
