import React, { createContext, useContext } from 'react'

/** Theme Context */
const ThemeCtx = createContext<null | Record<string, unknown>>({})

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

  // @ts-ignore DEBT: not sure how to type
  return componentName ? theme[componentName] : theme
}
