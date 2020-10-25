/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'

/** Theme Context */
const ThemeCtx = createContext({})

interface ThemeProps {
  /** Default component props overrides */
  theme: Record<string, unknown>
}

/**
 * [Theme component 📝](https://componentry.design/components/theme)
 */
export const Theme: React.FC<ThemeProps> = ({ children, theme }) => {
  return <ThemeCtx.Provider value={theme}>{children}</ThemeCtx.Provider>
}
Theme.displayName = 'Theme'

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param component Library component name, eg Button, Dropdown, Modal, etc.
 */
export function useTheme<T>(componentName: string): T {
  // For the theme context, we don't warn on accessing without a provider b/c
  // internally components use this hook to check for optionally set theme
  // values in apps where the provider may not have been added.
  const theme = useContext(ThemeCtx) || {}
  return componentName ? theme[componentName] || {} : theme
}
