import React, { createContext, useState, useEffect } from 'react'

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
const MediaProvider = ({ children, breakpoints = [0, 900, 1250] }) => {
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
export default MediaProvider
