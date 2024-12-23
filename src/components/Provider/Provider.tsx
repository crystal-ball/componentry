import React, { createContext, useContext } from 'react'

import { ComponentName, ComponentProps, Config } from '../../config/config'
import { Theme } from '../../theme/theme'
import { themeDefaults } from '../../theme/theme-defaults'
import { initializeUtilityPropsTheme } from '../../utils/utility-props'

/** Componentry Context */
const ComponentryCtx = createContext<Config | undefined>(undefined)

export interface ComponentryProviderProps {
  children: React.ReactElement
  /** Component default props */
  config: Config
}

/**
 * Provider for the application theme and default component props.
 * @example
 * ```tsx
 * const appTheme = {}
 * const defaultProps = {}
 * <ComponentryProvider theme={appTheme} components={defaultProps}>
 *  <App />
 * </ComponentryProvider>
 * ```
 * @see [📝 ComponentryProvider](https://componentry.design/components/provider)
 */
export const ComponentryProvider = ({ children, config }: ComponentryProviderProps) => {
  // Internal convenience helper: if user has provided a theme value initialize
  // the utility classes module with it for them
  if (config.theme) {
    initializeUtilityPropsTheme(config.theme)
  }

  return <ComponentryCtx.Provider value={config}>{children}</ComponentryCtx.Provider>
}
ComponentryProvider.displayName = 'ComponentryProvider'

// --------------------------------------------------------
// THEME

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 */
export function useTheme(): Theme {
  const ctx = useContext(ComponentryCtx)
  return ctx?.theme ?? themeDefaults
}

// --------------------------------------------------------
// PROPS

let preCompileMode = false
let preCompileContext: Config | undefined

export function __initializePreCompileMode(config: Config): void {
  preCompileMode = true
  preCompileContext = config

  if (config.theme) {
    initializeUtilityPropsTheme(config.theme)
  }
}

/**
 * Internal function for accessing component default props through context.
 */
export function useThemeProps<Name extends ComponentName>(
  componentName: Name,
): ComponentProps[Name] | undefined {
  if (preCompileMode) {
    return preCompileContext?.defaultProps?.[componentName]
  }

  // During Babel pre-compiling `preCompileMode` will always be true, during
  // runtime execution it will always be false
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ctx = useContext(ComponentryCtx)
  return ctx?.defaultProps?.[componentName]
}
