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

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param componentName Library component name, eg Button, Dropdown, Modal, etc.
 */
export function useTheme<Theme>(componentName: string, __precompile = false): Theme {
  // @ts-ignore DEBT: not sure how to type
  if (__precompile) return {}

  // eslint-disable-next-line react-hooks/rules-of-hooks -- Library __precompile is a build time constant
  const theme = useContext(ThemeCtx)

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
