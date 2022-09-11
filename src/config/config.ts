import {
  type ActiveActionProps,
  type ActiveContentProps,
  type ActiveProps,
} from '../components/Active/Active'
import { type AlertProps } from '../components/Alert/Alert'
import { AlertStyles } from '../components/Alert/Alert.styles'
import { type BadgeProps } from '../components/Badge/Badge'
import { BadgeStyles } from '../components/Badge/Badge.styles'
import { type BlockProps } from '../components/Block/Block'
import { type ButtonProps } from '../components/Button/Button'
import { ButtonStyles } from '../components/Button/Button.styles'
import { type CardProps } from '../components/Card/Card'
import { CardStyles } from '../components/Card/Card.styles'
import { CloseStyles } from '../components/Close/Close.styles'
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
import { FormGroupStyles } from '../components/FormGroup/FormGroup.styles'
import { type GridProps } from '../components/Grid/Grid'
import { type IconProps } from '../components/Icon/Icon'
import { IconStyles } from '../components/Icon/Icon.styles'
import { type IconButtonProps } from '../components/IconButton/IconButton'
import { IconButtonStyles } from '../components/IconButton/IconButton.styles'
import { type InputFieldProps, type InputLabelProps } from '../components/Input/Input'
import { InputStyles } from '../components/Input/Input.styles'
import { type LinkProps } from '../components/Link/Link'
import { LinkStyles } from '../components/Link/Link.styles'
import {
  type ModalBodyProps,
  type ModalHeaderProps,
  type ModalProps,
  type ModalTitleProps,
} from '../components/Modal/Modal'
import { ModalStyles } from '../components/Modal/Modal.styles'
import { type PaperProps } from '../components/Paper/Paper'
import { PaperStyles } from '../components/Paper/Paper.styles'
import {
  type PopoverActionProps,
  type PopoverContentProps,
  type PopoverProps,
} from '../components/Popover/Popover'
import { PopoverStyles } from '../components/Popover/Popover.styles'
import { TableStyles } from '../components/Table/Table.styles'
import {
  type TabsActionProps,
  type TabsActionsContainerProps,
  type TabsContentProps,
  type TabsProps,
} from '../components/Tabs/Tabs'
import { type TextProps } from '../components/Text/Text'
import { TextStyles } from '../components/Text/Text.styles'
import {
  type TooltipActionProps,
  type TooltipContentProps,
  type TooltipProps,
} from '../components/Tooltip/Tooltip'
import { TooltipStyles } from '../components/Tooltip/Tooltip.styles'

import { FoundationStyles } from '../styles/foundation.styles'
import { StatesStyles } from '../styles/states.styles'
import { Theme } from '../theme/theme'

export type Config = {
  theme?: Theme
  styles?: Partial<ComponentStyles>
  defaultProps?: Partial<ComponentProps>
}

export type ComponentStyles = {
  foundation: FoundationStyles
  Alert: AlertStyles
  Badge: BadgeStyles
  Button: ButtonStyles
  Card: CardStyles
  Close: CloseStyles
  FormGroup: FormGroupStyles
  Icon: IconStyles
  IconButton: IconButtonStyles
  Input: InputStyles
  Link: LinkStyles
  Modal: ModalStyles
  Paper: PaperStyles
  Popover: PopoverStyles
  Table: TableStyles
  Text: TextStyles
  Tooltip: TooltipStyles
  states: StatesStyles
}

export type ComponentProps = {
  Active: ActiveProps
  ActiveAction: ActiveActionProps
  ActiveContent: ActiveContentProps
  Alert: AlertProps
  Badge: BadgeProps
  Block: BlockProps
  Button: ButtonProps
  Card: CardProps
  Drawer: DrawerProps
  DrawerAction: DrawerActionProps
  DrawerContent: DrawerContentProps
  Dropdown: DropdownProps
  DropdownItem: DropdownItemProps
  DropdownAction: DropdownActionProps
  DropdownContent: DropdownContentProps
  Flex: FlexProps
  Grid: GridProps
  Icon: IconProps
  IconButton: IconButtonProps
  InputField: InputFieldProps
  InputLabel: InputLabelProps
  Link: LinkProps
  Modal: ModalProps
  ModalBody: ModalBodyProps
  ModalHeader: ModalHeaderProps
  ModalTitle: ModalTitleProps
  Paper: PaperProps
  Popover: PopoverProps
  PopoverAction: PopoverActionProps
  PopoverContent: PopoverContentProps
  Tabs: TabsProps
  TabsAction: TabsActionProps
  TabsContent: TabsContentProps
  TabsActionsContainer: TabsActionsContainerProps
  Text: TextProps
  Tooltip: TooltipProps
  TooltipAction: TooltipActionProps
  TooltipContent: TooltipContentProps
}

export type ComponentName = keyof ComponentProps
