import React from 'react'
import { createActiveAction } from '../../utils/create-active-action-component'
import { createActiveContainer } from '../../utils/create-active-container-component'
import { createActiveContent } from '../../utils/create-active-content-component'
import { UtilityProps } from '../../utils/utility-props'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from '../Active/active-types'
import { Link } from '../Link/Link'

export interface TooltipProps
  extends ActiveContainerBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface TooltipActionProps
  extends ActiveActionBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface TooltipContentProps
  extends ActiveContentBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
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
export const Tooltip = createActiveContainer('Tooltip', {
  escEvents: true,
  mouseEvents: true,
}) as Tooltip

Tooltip.Action = createActiveAction('TooltipAction', {
  aria: { describedby: true },
  defaultAs: Link,
})

Tooltip.Content = createActiveContent('TooltipContent', {
  aria: { id: true, role: 'tooltip', hidden: true },
  defaultAs: TooltipContentElement,
})

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
