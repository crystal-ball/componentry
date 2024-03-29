// --- Config/Theme
export { type Config } from './config/config'
export { type TextElementMap } from './theme/theme-defaults'
export { type Theme, createTheme } from './theme/theme'

// --- Providers
export { ComponentryProvider, useTheme } from './components/Provider/Provider'
export { Media, useMedia } from './components/Media/Media'

// --- Components
export { Active } from './components/Active/Active'
export { Alert } from './components/Alert/Alert'
export { Badge, type BadgeProps } from './components/Badge/Badge'
export { Block, type BlockProps } from './components/Block/Block'
export { Button, type ButtonProps } from './components/Button/Button'
export { Card } from './components/Card/Card'
export { Close } from './components/Close/Close'
export { Drawer } from './components/Drawer/Drawer'
export { Dropdown } from './components/Dropdown/Dropdown'
export { Flex, type FlexProps } from './components/Flex/Flex'
export { FormGroup } from './components/FormGroup/FormGroup'
export { Grid, type GridProps } from './components/Grid/Grid'
export {
  Icon,
  configureIconElementsMap,
  type IconElementsMap,
  type IconProps,
} from './components/Icon/Icon'
export { IconButton, type IconButtonProps } from './components/IconButton/IconButton'
export { Input } from './components/Input/Input'
export { Link, type LinkProps } from './components/Link/Link'
export { Modal } from './components/Modal/Modal'
export { Paper, type PaperProps } from './components/Paper/Paper'
export { Popover } from './components/Popover/Popover'
export { Table } from './components/Table/Table'
export { Tabs } from './components/Tabs/Tabs'
export { Text, type TextProps } from './components/Text/Text'
export { Tooltip } from './components/Tooltip/Tooltip'

// --- Utilities
export { useActive, useActiveScrollReset, useNoScroll, useVisible } from './hooks'
export { createElement } from './utils/create-element'
export { setupOutlineHandlers } from './utils/dom'
export { type MergeTypes } from './utils/types'
export {
  createUtilityProps,
  initializeUtilityPropsTheme,
  type ElementTypeProps,
  type UtilityProps,
} from './utils/utility-props'

// --- Tailwind
export { borderPlugin } from './utils/tailwind-plugins'
export { tailwindSafelist } from './utils/tailwind-safelist'
