import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionBuilder } from '../utils/active-action-component-builder'
import { activeContentBuilder } from '../utils/active-content-component-builder'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
  ComponentBaseProps,
} from '../utils/types'

export interface TooltipProps
  extends ActiveContainerBaseProps,
    ComponentBaseProps<'div'> {}

export interface TooltipActionProps
  extends ActiveActionBaseProps,
    ComponentBaseProps<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface TooltipContentProps
  extends ActiveContentBaseProps,
    ComponentBaseProps<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface Tooltip {
  (props: TooltipProps): React.ReactElement
  /**
   * [Tooltip action component 📝](https://componentry.design/components/tooltip)
   */
  Action: React.FC<TooltipActionProps>
  /**
   * [Tooltip content component 📝](https://componentry.design/components/tooltip)
   */
  Content: React.FC<TooltipContentProps>
}

/**
 * [Tooltip component 📝](https://componentry.design/components/tooltip)
 */
export const Tooltip = activeContainerBuilder<TooltipProps>('Tooltip', {
  escEvents: true,
  mouseEvents: true,
}) as Tooltip

Tooltip.Action = activeActionBuilder<TooltipActionProps>('TooltipAction', {
  aria: { describedby: true },
})

Tooltip.Content = activeContentBuilder<TooltipContentProps>('TooltipContent', {
  aria: { id: true, role: 'tooltip', hidden: true },
  positioned: true,
})
