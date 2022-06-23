/**
 * @file Library hooks
 */

import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ActiveContext, ActiveCtx } from './utils/active-container-component-builder'

// --------------------------------------------------------
// useActive hook

export const useActive = (): ActiveContext => useContext(ActiveCtx)

// --------------------------------------------------------
// useActiveScrollReset hook

/**
 * Set the scroll-top of passed reference node to 0 when active changes to
 * truthy. Used for resetting scroll position of components on activation.
 */
export const useActiveScrollReset = (
  active: string | boolean,
  ref: React.RefObject<HTMLElement>,
): void => {
  useLayoutEffect(() => {
    if (active && ref.current) {
      // eslint-disable-next-line no-param-reassign
      ref.current.scrollTop = 0
    }
  }, [active, ref])
}

// --------------------------------------------------------
// useNoScroll hook

/**
 * Prevent document body scroll when active. Used for freezing app content when
 * overlay elements are activated
 */
export const useNoScroll = (active: string | boolean): void => {
  useEffect(() => {
    const { classList } = window.document.body
    if (active) classList.add('no-scroll')
    else classList.remove('no-scroll')

    // On unmount always remove scroll in case of events like routing away from
    // open modals
    return function cleanup() {
      classList.remove('no-scroll')
    }
  }, [active])
}

// --------------------------------------------------------
// useVisible hook

type VisibleState = {
  active: string | boolean
  visible: string | boolean
}

/**
 * Hook handles transitioning display and opacity using active and visible
 * state using the following rules:
 *
 * - Show: Set active true to display element, then set visible true to
 *   transition element opacity using css transitions
 * - Hide: Set visible false to start element opacity using css transitions,
 *   then after transition duration set active false to set display none
 */
export const useVisible = (active: string | boolean, duration = 200): VisibleState => {
  const mounted = useRef(true)
  const isFirst = useRef(true)
  // Track when the component is unmounted so that we can prevent setting state
  // after the timeouts if the component was unmounted
  useEffect(
    () => () => {
      mounted.current = false
    },
    [],
  )

  // Visible state splits active and visible to allow css animations
  const [state, updateState] = useState({ active, visible: active })

  useEffect(() => {
    let timer: null | NodeJS.Timeout
    if (isFirst.current) {
      // Effect will be called once after initial render and updating state
      // based on active can result in a flicker (repro with Modal and default
      // not visible)
      isFirst.current = false
    } else if (active) {
      // ℹ️ Although the timeout used is very short, it's possible that a
      // component could be unmounted before it's run so we keep a reference to
      // the timeout that we can cleanup

      // When activated immediately set active and transition to visible, this
      // will ensure the DOM element is rendered, and then add visible classes for
      // transitions on the next possible paint cycle
      updateState({ active: true, visible: false })
      requestAnimationFrame(() => {
        if (mounted.current) updateState({ active: true, visible: true })
      })
    } else {
      // When deactivated immediately set visible to false and transition active
      // after the transition duration, this allows the deactivation animations
      // to complete before toggling aria-hidden to true
      updateState({ active: true, visible: false })
      timer = setTimeout(() => {
        timer = null
        if (mounted.current) updateState({ active: false, visible: false })
      }, duration)
    }

    return function cleanup() {
      if (timer) clearTimeout(timer)
    }
  }, [active, duration])

  return state
}
