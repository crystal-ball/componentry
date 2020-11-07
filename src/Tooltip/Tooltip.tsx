import { activeContainerBuilder } from '../utils/active-container-component-builder'
import { activeActionComponent } from '../utils/active-action-component-builder'
import { activeContentComponent } from '../utils/active-content-component-builder'
import { BaseActiveContainerProps, BaseProps } from '../utils/base-types'

export interface TooltipProps
  extends BaseActiveContainerProps,
    BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export interface TooltipActionProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
  /** Display variant */
  variant?: 'primary'
}

export interface TooltipContentProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
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

Tooltip.Action = activeActionComponent<TooltipActionProps>('TooltipAction', {
  aria: { describedby: true },
})

Tooltip.Content = activeContentComponent<TooltipContentProps>('TooltipContent', {
  aria: { id: true, role: 'tooltip', hidden: true },
  positioned: true,
})
