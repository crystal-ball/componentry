import React, { createContext, useContext } from 'react'

/**
 * Theme Context
 */
const ThemeCtx = createContext({})

/**
 * The `<ThemeProvider>` is a shorthand for setting context values that can be
 * used for changing the default configuration values used by Componentry
 * components. The passed theme configurations are namespaced to prevent
 * collisions.
 */
export default function ThemeProvider({ children, theme }) {
  return <ThemeCtx.Provider value={theme}>{children}</ThemeCtx.Provider>
}

/**
 * Custom hook that should be used to access Theme context.
 */
export const useTheme = component => {
  // For the theme context, we don't warn on accessing without a provider, b/c
  // internally components use this hook to check for optionally set theme values
  // but should fallback to defaults if not set
  const theme = useContext(ThemeCtx) || {}
  return component ? theme[component] || {} : theme
}
