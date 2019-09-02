import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * Media Context
 */
export const MediaCtx = createContext({})

/**
 * The Media provider accepts breakpoints and can be used with the `useMedia`
 * hook in any component Default breakpoints are:
 *
 * - sm = >= 0
 * - md = >= 900
 * - lg = >= 1250
 *
 * Resize is listened to using the `matchMedia` API, which is supoorted by IE10,
 * so it's pretty widely implemented
 *
 * TODO: by default provide breakpoints for small and large with docs on adding
 * a medium breakpoint -> this covers "normal" use case for a sane app.
 *
 * TODO: remove query listeners on unmount??
 *
 * TODO: nest breakpoints so that other media info can be provided like device
 * orientation, dark mode, etc.
 */
export default function MediaProvider({ children, breakpoints = [0, 900, 1250] }) {
  const calcBreakpoints = w => ({
    sm: w < breakpoints[1],
    md: w >= breakpoints[1] && w < breakpoints[2],
    lg: w >= breakpoints[2],
  })

  const [bps, updateBps] = useState(calcBreakpoints(window.innerWidth))
  const setBreakpoints = () => {
    updateBps(calcBreakpoints(window.innerWidth))
  }

  useEffect(() => {
    breakpoints.forEach(bp => {
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#Receiving_query_notifications
      const mq = window.matchMedia(`(min-width: ${bp}px)`)
      mq.addListener(setBreakpoints)
    })
  }, [])

  return <MediaCtx.Provider value={bps}> {children}</MediaCtx.Provider>
}

/**
 * Access the application media context value
 */
export const useMedia = () => {
  const media = useContext(MediaCtx)
  if (process.env.NODE_ENV !== 'production' && !media) {
    console.warn('useMedia used without a <Media /> provider') // eslint-disable-line
    return null
  }
  return media
}

/**
 * DARK MODE (todo)
 *
 * There is basically no support for this media query yet... but these can be
 * checked for truthy values to determine which mode to use
 *
 * darkScheme: window.matchMedia('(prefers-color-scheme: dark)')
 * lightScheme: window.matchMedia('(prefers-color-scheme: light)')
 */
