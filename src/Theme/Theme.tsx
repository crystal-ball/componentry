import React, { createContext, useContext } from 'react'

/** Theme Context */
const ThemeCtx = createContext({})

interface ThemeProps {
  children: React.ReactElement
  /** Default component props theme */
  theme: { [componentName: string]: unknown }
}

/**
 * [Theme component 📝](https://componentry.design/components/theme)
 */
export const Theme: React.FC<ThemeProps> = ({ children, theme }: ThemeProps) => {
  return <ThemeCtx.Provider value={theme}>{children}</ThemeCtx.Provider>
}
Theme.displayName = 'Theme'

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param component Library component name, eg Button, Dropdown, Modal, etc.
 */
export const useTheme = (component: string): { [prop: string]: unknown } => {
  // For the theme context, we don't warn on accessing without a provider b/c
  // internally components use this hook to check for optionally set theme
  // values in apps where the provider may not have been added.
  const theme = useContext(ThemeCtx) || {}
  return component ? theme[component] || {} : theme
}
