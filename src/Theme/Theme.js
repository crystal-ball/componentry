import React, { createContext, useContext } from 'react'

/**
 * Theme Context
 */
export const Context = createContext()

/**
 * The `<ThemeProvider>` is a shorthand for setting context values that can be
 * used for changing the default configuration values used by Componentry
 * components. The passed theme configurations are namespaced to prevent
 * collisions.
 */
export default function ThemeProvider({ children, theme }) {
  return <Context.Provider value={theme}>{children}</Context.Provider>
}

/**
 * Custom hook that should be used to access Media context.
 */
export const useTheme = component => {
  const theme = useContext(Context) || {}
  return component ? theme[component] || {} : theme
}
