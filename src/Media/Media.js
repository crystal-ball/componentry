import React, { createContext, useContext, useEffect, useState } from 'react'

/** Media Context */
const MediaCtx = createContext({
  sm: false,
  md: false,
  lg: false,
})

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
 * @param {function} updateBps Hook state update function
 */
function mountListeners(breakpoints, updateBps) {
  function setBreakpoints() {
    updateBps(calcBreakpoints(breakpoints))
  }

  breakpoints.forEach((bp) => {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#Receiving_query_notifications
    const mq = window.matchMedia(`(min-width: ${bp}px)`)
    mq.addListener(setBreakpoints)
  })
}

/**
 * [Media component 📝](https://componentry.design/components/media)
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
Media.displayName = '✨Media'

/**
 * [Media hook 📝](https://componentry.design/components/media)
 * @returns {{ sm: boolean, md: boolean, lg: boolean }}
 */
export const useMedia = () => {
  const media = useContext(MediaCtx)
  if (process.env.NODE_ENV !== 'production' && !media) {
    throw new Error('useMedia called without a <Media /> provider')
  }
  return media
}
