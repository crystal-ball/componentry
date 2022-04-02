import { type ReactElement, createContext, useContext, useEffect } from 'react'
import { initializeUtilityClassesTheme } from '../../utils/utility-classes'

/** Componentry Context */
const ComponentryCtx = createContext<null | Record<string, unknown>>(null)

interface ComponentryProviderProps {
  children: ReactElement
  /** Default component props overrides */
  theme: Record<string, unknown>
}

/**
 * [Componentry Context Provider component 📝](https://componentry.design/components/componentryprovider)
 * @experimental
 */
export function ComponentryProvider({ children, theme }: ComponentryProviderProps) {
  // Internal convenience helper: if user has provided a theme value initialize
  // the utility classes module with it for them
  useEffect(() => {
    if (theme.theme) initializeUtilityClassesTheme(theme.theme)
  }, [theme.theme])

  return <ComponentryCtx.Provider value={theme}>{children}</ComponentryCtx.Provider>
}
ComponentryProvider.displayName = 'Theme'

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

function useContextTheme(componentName?: string) {
  const theme = useContext(ComponentryCtx)
  return getThemeValue(theme, componentName)
}

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param componentName - Library component name, eg Button, Dropdown, Modal, etc.
 */
export function useTheme<Theme>(componentName?: string): Theme {
  if (preCompileMode) {
    return getThemeValue(preCompileThemeValue, componentName)
  }
  // During Babel pre-compiling `preCompileMode` will always be true, during
  // runtime execution it will always be false
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContextTheme(componentName)
}
