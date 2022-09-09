import {
  type ActiveActionProps,
  type ActiveContentProps,
  type ActiveProps,
} from '../components/Active/Active'
import { type AlertProps } from '../components/Alert/Alert'
import { type BadgeProps } from '../components/Badge/Badge'
import { type BlockProps } from '../components/Block/Block'
import { type ButtonProps } from '../components/Button/Button'
import { ButtonStyles } from '../components/Button/Button.styles'
import { type CardProps } from '../components/Card/Card'
import {
  type DrawerActionProps,
  type DrawerContentProps,
  type DrawerProps,
} from '../components/Drawer/Drawer'
import {
  type DropdownActionProps,
  type DropdownContentProps,
  type DropdownItemProps,
  type DropdownProps,
} from '../components/Dropdown/Dropdown'
import { type FlexProps } from '../components/Flex/Flex'
import { type GridProps } from '../components/Grid/Grid'
import { type IconProps } from '../components/Icon/Icon'
import { type IconStyles } from '../components/Icon/Icon.styles'
import { type IconButtonProps } from '../components/IconButton/IconButton'
import { type IconButtonStyles } from '../components/IconButton/IconButton.styles'
import { type InputFieldProps, type InputLabelProps } from '../components/Input/Input'

import { type LinkProps } from '../components/Link/Link'
import { type LinkStyles } from '../components/Link/Link.styles'
import {
  type ModalBodyProps,
  type ModalHeaderProps,
  type ModalProps,
  type ModalTitleProps,
} from '../components/Modal/Modal'
import { type PaperProps } from '../components/Paper/Paper'
import { type PaperStyles } from '../components/Paper/Paper.styles'
import {
  type PopoverActionProps,
  type PopoverContentProps,
  type PopoverProps,
} from '../components/Popover/Popover'
import {
  type TabsActionProps,
  type TabsActionsContainerProps,
  type TabsContentProps,
  type TabsProps,
} from '../components/Tabs/Tabs'
import { type TextProps } from '../components/Text/Text'
import { type TextStyles } from '../components/Text/Text.styles'
import {
  type TooltipActionProps,
  type TooltipContentProps,
  type TooltipProps,
} from '../components/Tooltip/Tooltip'

import { type FoundationStyles } from '../styles/foundation.styles'
import { type StatesStyles } from '../styles/states.styles'
import { Theme } from '../theme/theme'

export type Config = {
  theme?: Theme
  styles?: {
    foundation?: FoundationStyles
    Alert?: any
    Badge?: any
    Button?: ButtonStyles
    Card?: any
    Close?: any
    FormGroup?: any
    Icon?: IconStyles
    IconButton?: IconButtonStyles
    Input?: any
    Link?: LinkStyles
    Modal?: any
    Paper?: PaperStyles
    Popover?: any
    Table?: any
    Text?: TextStyles
    Tooltip?: any
    states?: StatesStyles
  }
  defaultProps?: {
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
    Paper?: PaperProps
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
}
