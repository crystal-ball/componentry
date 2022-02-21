import React, { createContext, useContext } from 'react'

/** Theme Context */
const ThemeCtx = createContext<null | Record<string, unknown>>(null)

interface ThemeProps {
  /** Default component props overrides */
  theme: Record<string, unknown>
}

/**
 * [Theme component 📝](https://componentry.design/components/theme)
 * @experimental
 */
export const Theme: React.FC<ThemeProps> = ({ children, theme }) => {
  return <ThemeCtx.Provider value={theme}>{children}</ThemeCtx.Provider>
}
Theme.displayName = 'Theme'

function getThemeValue(theme: any, componentName: string | undefined) {
  // For the theme context, we don't warn on accessing without a provider b/c
  // internally components use this hook to check for optionally set theme
  // values in apps where the provider may not have been added.
  // @ts-ignore DEBT: not sure how to type
  if (!theme) return {}

  // If called without a specific component name return the entire theme
  // @ts-ignore DEBT: not sure how to type
  if (!componentName) return theme

  // @ts-ignore DEBT: not sure how to type
  return componentName in theme ? theme[componentName] : {}
}

let preCompileMode = false
let preCompileThemeValue = {}

export function initializePreCompileMode(theme: any) {
  preCompileMode = true
  preCompileThemeValue = theme
}

function useContextTheme(componentName: string) {
  const theme = useContext(ThemeCtx)
  return getThemeValue(theme, componentName)
}

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param componentName - Library component name, eg Button, Dropdown, Modal, etc.
 */
export function useTheme<Theme>(componentName: string): Theme {
  if (preCompileMode) {
    return getThemeValue(preCompileThemeValue, componentName)
  }
  // During Babel pre-compiling `preCompileMode` will always be true, during
  // runtime execution it will always be false
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContextTheme(componentName)
}
