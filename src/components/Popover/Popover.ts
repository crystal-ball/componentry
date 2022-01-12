import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionBuilder } from '../utils/active-action-component-builder'
import { activeContentBuilder } from '../utils/active-content-component-builder'
import { staticComponent } from '../utils/static-component-builder'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
  ComponentBaseProps,
} from '../utils/types'

export interface PopoverProps
  extends ActiveContainerBaseProps,
    ComponentBaseProps<'div'> {}

export interface PopoverActionProps
  extends ActiveActionBaseProps,
    ComponentBaseProps<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface PopoverBodyProps
  extends ActiveContentBaseProps,
    ComponentBaseProps<'div'> {}

export interface PopoverContentProps extends ComponentBaseProps<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface PopoverHeadingProps extends ComponentBaseProps<'div'> {}

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
 * @experimental
 */
export const Popover = activeContainerBuilder<PopoverProps>('Popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true,
}) as Popover

Popover.Action = activeActionBuilder<PopoverActionProps>('PopoverAction', {
  aria: { describedby: true },
})

Popover.Body = staticComponent<PopoverBodyProps>('PopoverBody')

Popover.Content = activeContentBuilder<PopoverContentProps>('PopoverContent', {
  aria: { id: true, role: 'tooltip', hidden: true },
  positioned: true,
})

Popover.Heading = staticComponent<PopoverHeadingProps>('PopoverHeading', {
  as: 'h3',
})
