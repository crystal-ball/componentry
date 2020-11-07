import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionComponent } from '../utils/active-action-component-builder'
import { activeContentComponent } from '../utils/active-content-component-builder'
import { staticComponent } from '../utils/static-component-builder'
import {
  BaseActiveActionProps,
  BaseActiveContainerProps,
  BaseActiveContentProps,
  BaseProps,
} from '../utils/base-types'

export interface PopoverProps
  extends BaseActiveContainerProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface PopoverActionProps
  extends BaseActiveActionProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
  /** Display variant */
  variant?: 'primary'
}

export interface PopoverBodyProps
  extends BaseActiveContentProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface PopoverContentProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
  /** Display variant */
  variant?: 'primary'
}

export interface PopoverHeadingProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface Popover {
  (props: PopoverProps): React.ReactElement
  /**
   * [Popover action component 📝](https://componentry.design/components/popover)
   */
  Action: React.FC<PopoverActionProps>
  /**
   * [Popover body component 📝](https://componentry.design/components/popover)
   */
  Body: React.FC<PopoverBodyProps>
  /**
   * [Popover content component 📝](https://componentry.design/components/popover)
   */
  Content: React.FC<PopoverContentProps>
  /**
   * [Popover heading component 📝](https://componentry.design/components/popover)
   */
  Heading: React.FC<PopoverHeadingProps>
}

/**
 * [Popover component 📝](https://componentry.design/components/popover)
 */
export const Popover = activeContainerBuilder<PopoverProps>('Popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true,
}) as Popover

Popover.Action = activeActionComponent('PopoverAction', {
  aria: { describedby: true },
})

Popover.Body = staticComponent<PopoverBodyProps>('PopoverBody', {
  componentCx: '🅲-popover-body',
})

Popover.Content = activeContentComponent<PopoverContentProps>('PopoverContent', {
  aria: { id: true, role: 'tooltip', hidden: true },
  positioned: true,
})

Popover.Heading = staticComponent<PopoverHeadingProps>('PopoverHeading', {
  as: 'h3',
  componentCx: '🅲-popover-heading',
})
