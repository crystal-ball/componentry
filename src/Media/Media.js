import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * Media Context
 */
const MediaCtx = createContext({})

/**
 * Calculates the state for each breakpoint based on current window width
 * @param {Array} breakpoints Set of application breakpoints
 */
function calcBreakpoints(breakpoints) {
  const w = window.innerWidth

  return {
    sm: w < breakpoints[1],
    md: w >= breakpoints[1] && w < breakpoints[2],
    lg: w >= breakpoints[2],
  }
}

/**
 * Uses `window.matchMedia` to listen for changes to window media queries and
 * updates breakpoint status on every change.
 * @param {Array} breakpoints Set of application breakpoints
 * @param {func} updateBps Hook state update function
 */
function mountListeners(breakpoints, updateBps) {
  function setBreakpoints() {
    updateBps(calcBreakpoints(breakpoints))
  }

  breakpoints.forEach(bp => {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#Receiving_query_notifications
    const mq = window.matchMedia(`(min-width: ${bp}px)`)
    mq.addListener(setBreakpoints)
  })
}

/**
 * The Media provider accepts breakpoints and can be used with the `useMedia`
 * hook in any component Default breakpoints are:
 *
 * - sm = < 768
 * - md = < 1250
 * - lg = >= 1250
 *
 * Window resizing is listened to using the `matchMedia` API (which is supported
 * all the way down to IE10)
 */
export default function Media({ children, breakpoints = [0, 768, 1250] }) {
  const [bps, updateBps] = useState(calcBreakpoints(breakpoints))

  // ℹ️ Call to mount media query listeners is wrapped in useEffect to prevent
  // mounting listeners multiple times. Currently we don't remove and remount
  // listeners if the breakpoints change, but that's a really edge case to
  // support...
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    mountListeners(breakpoints, updateBps)
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */

  return <MediaCtx.Provider value={bps}> {children}</MediaCtx.Provider>
}
Media.displayName = 'Media'

/**
 * Hook to access the current Media context value
 */
export const useMedia = () => {
  const media = useContext(MediaCtx)
  if (process.env.NODE_ENV !== 'production' && !media) {
    console.warn('useMedia used without a <Media /> provider') // eslint-disable-line
    return null
  }
  return media
}
