import React, { type ComponentPropsWithoutRef } from 'react'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  type ActiveActionBaseProps,
  type ActiveContainerBaseProps,
  type ActiveContentBaseProps,
} from '../../utils/base-types'
import { UtilityProps } from '../../utils/utility-classes'
import { Link } from '../Link/Link'

export interface TooltipProps
  extends ActiveContainerBaseProps,
    UtilityProps,
    ComponentPropsWithoutRef<'div'> {}

export interface TooltipActionProps
  extends ActiveActionBaseProps,
    UtilityProps,
    ComponentPropsWithoutRef<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface TooltipContentProps
  extends ActiveContentBaseProps,
    UtilityProps,
    ComponentPropsWithoutRef<'div'> {
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
 * @experimental
 */
export const Tooltip = activeContainerBuilder<TooltipProps>('Tooltip', {
  escEvents: true,
  mouseEvents: true,
}) as Tooltip

Tooltip.Action = activeActionBuilder<TooltipActionProps>('TooltipAction', {
  aria: { describedby: true },
  defaultAs: Link,
})

Tooltip.Content = activeContentBuilder<TooltipContentProps & { renderArrow?: boolean }>(
  'TooltipContent',
  {
    aria: { id: true, role: 'tooltip', hidden: true },
    defaultAs: TooltipContentElement,
  },
)

function TooltipContentElement({
  children,
  renderArrow = true,
  ...rest
}: {
  children: React.ReactNode
  renderArrow: boolean
}) {
  return (
    <div {...rest}>
      {renderArrow && <div className='C9Y-TooltipContentArrow' />}
      <div className='C9Y-TooltipContentContents'>{children}</div>
    </div>
  )
}
