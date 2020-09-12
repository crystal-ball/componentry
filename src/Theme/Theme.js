import React, { createContext, useContext } from 'react'

/** Theme Context */
const ThemeCtx = createContext({})

/**
 * [Theme component 📝](https://componentry.design/components/theme)
 */
export function Theme({ children, theme }) {
  return <ThemeCtx.Provider value={theme}>{children}</ThemeCtx.Provider>
}
Theme.displayName = 'Theme'

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 */
export const useTheme = (component) => {
  // For the theme context, we don't warn on accessing without a provider, b/c
  // internally components use this hook to check for optionally set theme values
  // but should fallback to defaults if not set
  const theme = useContext(ThemeCtx) || {}
  return component ? theme[component] || {} : theme
}
