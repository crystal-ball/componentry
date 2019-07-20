import { useContext, useEffect, useState } from 'react'
import Context from './Context'

/**
 * Components that need transitional active and visible states will use the
 * Consumer to access the activeCtx, and pass Wrapped into the ActiveTransition
 * component, which uses state to manage passing active and visible according
 * to the transition duration for that component.
 */

export const useActive = () => useContext(Context)

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
  const [state, updateState] = useState({ active, visible: active })

  useEffect(() => {
    if (active) {
      updateState({ active: true, visible: false })
      setTimeout(() => {
        updateState({ active: true, visible: true })
      }, 17)
    } else {
      updateState({ active: true, visible: false })
      setTimeout(() => {
        updateState({ active: false, visible: false })
      }, duration)
    }
  }, [active])

  return state
}
