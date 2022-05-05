/* eslint-disable no-underscore-dangle */
import { type ReactElement, createContext, useContext, useMemo } from 'react'

import { type Theme } from '../../theme/theme'
import { themeDefaults } from '../../theme/theme-defaults'
import { initializeUtilityClassesTheme } from '../../utils/utility-classes'

import {
  type ActiveActionProps,
  type ActiveContentProps,
  type ActiveProps,
} from '../Active/Active'
import { type AlertProps } from '../Alert/Alert'
import { type BadgeProps } from '../Badge/Badge'
import { type BlockProps } from '../Block/Block'
import { type ButtonProps } from '../Button/Button'
import { type CardProps } from '../Card/Card'
import {
  type DrawerActionProps,
  type DrawerContentProps,
  type DrawerProps,
} from '../Drawer/Drawer'
import {
  type DropdownActionProps,
  type DropdownContentProps,
  type DropdownItemProps,
  type DropdownProps,
} from '../Dropdown/Dropdown'
import { type FlexProps } from '../Flex/Flex'
import { type GridProps } from '../Grid/Grid'
import { type IconProps } from '../Icon/Icon'
import { type IconButtonProps } from '../IconButton/IconButton'
import { type InputFieldProps, type InputLabelProps } from '../Input/Input'
import { type LinkProps } from '../Link/Link'
import {
  type ModalBodyProps,
  type ModalHeaderProps,
  type ModalProps,
  type ModalTitleProps,
} from '../Modal/Modal'
import {
  type PopoverActionProps,
  type PopoverContentProps,
  type PopoverProps,
} from '../Popover/Popover'
import {
  type TabsActionProps,
  type TabsActionsContainerProps,
  type TabsContentProps,
  type TabsProps,
} from '../Tabs/Tabs'
import { type TextProps } from '../Text/Text'
import {
  type TooltipActionProps,
  type TooltipContentProps,
  type TooltipProps,
} from '../Tooltip/Tooltip'

export type Components = {
  Active?: ActiveProps
  ActiveAction?: ActiveActionProps
  ActiveContent?: ActiveContentProps
  Alert?: AlertProps
  Badge?: BadgeProps
  Block?: BlockProps
  Button?: ButtonProps
  Card?: CardProps
  Drawer?: DrawerProps
  DrawerAction?: DrawerActionProps
  DrawerContent?: DrawerContentProps
  Dropdown?: DropdownProps
  DropdownItem?: DropdownItemProps
  DropdownAction?: DropdownActionProps
  DropdownContent?: DropdownContentProps
  Flex?: FlexProps
  Grid?: GridProps
  Icon?: IconProps
  IconButton?: IconButtonProps
  InputField?: InputFieldProps
  InputLabel?: InputLabelProps
  Link?: LinkProps
  Modal?: ModalProps
  ModalBody?: ModalBodyProps
  ModalHeader?: ModalHeaderProps
  ModalTitle?: ModalTitleProps
  Popover?: PopoverProps
  PopoverAction?: PopoverActionProps
  PopoverContent?: PopoverContentProps
  Tabs?: TabsProps
  TabsAction?: TabsActionProps
  TabsContent?: TabsContentProps
  TabsActionsContainer?: TabsActionsContainerProps
  Text?: TextProps
  Tooltip?: TooltipProps
  TooltipAction?: TooltipActionProps
  TooltipContent?: TooltipContentProps
}

/** Componentry Context */
const ComponentryCtx = createContext<null | { components: Components; theme: Theme }>(
  null,
)

interface ComponentryProviderProps {
  children: ReactElement
  /** Component default props */
  components?: Components
  /** Application theme values */
  theme?: Theme
}

export interface ComponentryProvider {
  (props: ComponentryProviderProps): JSX.Element
  displayName?: string
}

/**
 * #### [📝 ComponentryProvider](https://componentry.design/components/provider)
 *
 * Provider for the application theme and default component props.
 * @example
 * const appTheme = {}
 * const defaultProps = {}
 * ```tsx
 * <ComponentryProvider theme={appTheme} components={defaultProps}>
 *  <App />
 * </ComponentryProvider>
 * ```
 */
export const ComponentryProvider: ComponentryProvider = ({
  children,
  components,
  theme,
}) => {
  const contextValue = useMemo(() => {
    return { components: components ?? {}, theme: theme ?? themeDefaults }
  }, [components, theme])

  // Internal convenience helper: if user has provided a theme value initialize
  // the utility classes module with it for them
  initializeUtilityClassesTheme(contextValue.theme)

  return (
    <ComponentryCtx.Provider value={contextValue}>{children}</ComponentryCtx.Provider>
  )
}
ComponentryProvider.displayName = 'ComponentryProvider'

// --------------------------------------------------------
// THEME

/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 */
export function useTheme(): Theme {
  const ctx = useContext(ComponentryCtx)
  return ctx ? ctx.theme : themeDefaults
}

// --------------------------------------------------------
// PROPS

let preCompileMode = false
let preCompileComponentsValue: Components = {}

export function __initializePreCompileMode(components: Components): void {
  preCompileMode = true
  preCompileComponentsValue = components
}

function useContextProps<Name extends keyof Components>(
  componentName: Name,
): Components[Name] {
  const ctx = useContext(ComponentryCtx)
  return ctx ? ctx.components[componentName] : undefined
}

/**
 * Internal function for accessing component default props through context.
 */
export function useThemeProps<Name extends keyof Components>(
  componentName: Name,
): Components[Name] {
  if (preCompileMode) {
    return preCompileComponentsValue[componentName]
  }

  // During Babel pre-compiling `preCompileMode` will always be true, during
  // runtime execution it will always be false
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContextProps(componentName)
}
