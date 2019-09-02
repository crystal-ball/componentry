/**
 * Library hooks
 * @module
 */

import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { ActiveCtx } from './active-container-factory'

// --------------------------------------------------------
// useActive hook

export const useActive = () => useContext(ActiveCtx)

// --------------------------------------------------------
// useActiveScrollReset hook

/**
 * Set the scrolltop of passed reference node to 0 when active changes to
 * truthy. Used for resetting scroll position of components on activation.
 * @param {boolean} active
 * @param {Object} ref
 */
export const useActiveSrollReset = (active, ref) => {
  // console.log({ active, ref: ref.current })
  useLayoutEffect(() => {
    if (active && ref.current) {
      // eslint-disable-next-line no-param-reassign
      ref.current.scrollTop = 0
    } else {
      // console.log('NOPE: ', ref.current)
    }
  }, [active])
}

// --------------------------------------------------------
// useNoScroll hook

/**
 * Prevent document body scroll when active. Used for freezing app content when
 * overlay elements are activated
 * @param {boolean} active
 */
export const useNoScroll = active => {
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

/**
 * Hook handles transitioning display and opacity using active and visible
 * state using the following rules:
 *
 * - Show: Set active true to display element, then set visible true to
 *   transition element opacity using css transitions
 * - Hide: Set visible false to start element opacity using css transitions,
 *   then after transition duration set active false to set display none
 */
export const useVisible = (active, duration = 250) => {
  // Visible state splits active and visible to allow css animations
  const [state, updateState] = useState({ active, visible: active })

  useEffect(() => {
    // ℹ️ Although the timeout used is very short, it's possible that a
    // component could be unmounted before it's run so we keep a reference to
    // the timeout that we can cleanup
    let timer

    if (active) {
      // When activated immediately set active and transition to visible, this
      // will ensure the DOM element is rendered, and then add visible classes for
      // transitions on the next possible paint cycle
      updateState({ active: true, visible: false })
      requestAnimationFrame(() => {
        updateState({ active: true, visible: true })
      })
    } else {
      // When deactivated immediately set visible to false and transition active
      // after the transition duration, this allows the deactivation animations
      // to complete before toggling aria-hidden to true
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
