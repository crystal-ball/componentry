import React from 'react'

import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  type ActiveActionBaseProps,
  type ActiveContainerBaseProps,
  type ActiveContentBaseProps,
  type ComponentBaseProps,
} from '../../utils/base-types'
import { Link } from '../Link/Link'

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
      {renderArrow && <div className='🅲TooltipContentArrow' />}
      <div className='🅲TooltipContentContents'>{children}</div>
    </div>
  )
}
