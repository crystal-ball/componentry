import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * Media Context
 */
export const Context = createContext()

/**
 * The Media provider accepts breakpoints and can be used with the `useMedia`
 * hook in any component Default breakpoints are:
 *
 * - sm = >= 0
 * - md = >= 900
 * - lg = >= 1250
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
      const mq = window.matchMedia(`(min-width: ${bp}px)`)
      mq.addListener(setBreakpoints)
    })
  }, [])

  return <Context.Provider value={bps}> {children}</Context.Provider>
}

/**
 * Custom hook that should be used to access Media context.
 */
export const useMedia = () => {
  const media = useContext(Context)
  if (process.env.NODE_ENV !== 'production' && !media) {
    console.warn('useMedia used without a <Media /> provider provided') // eslint-disable-line
    return null
  }
  return media
}
