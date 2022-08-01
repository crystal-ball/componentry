import React from 'react'
import { activeActionBuilder } from '../../utils/active-action-component-builder'
import { activeContainerBuilder } from '../../utils/active-container-component-builder'
import { activeContentBuilder } from '../../utils/active-content-component-builder'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from '../../utils/base-types'
import { staticComponent } from '../../utils/static-component-builder'
import { UtilityProps } from '../../utils/utility-classes'
import { Button } from '../Button/Button'

export interface PopoverProps
  extends ActiveContainerBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface PopoverActionProps
  extends ActiveActionBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Display variant */
  variant?: 'primary'
}

export interface PopoverBodyProps
  extends ActiveContentBaseProps,
    UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface PopoverContentProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Display variant */
  variant?: 'primary'
}

export interface PopoverHeadingProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
  as?: React.ElementType
}

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
  defaultAs: Button,
})

function PopoverContentElement({
  children,
  // renderArrow = false, TODO
  ...rest
}: {
  children: React.ReactNode
  // renderArrow?: boolean
}) {
  return (
    <div {...rest}>
      {/* {renderArrow && <div className='C9Y-PopoverArrow' />} */}
      <div className='C9Y-PopoverContentContents'>{children}</div>
    </div>
  )
}

Popover.Content = activeContentBuilder<PopoverContentProps>('PopoverContent', {
  aria: { id: true, role: 'tooltip', hidden: true },
  defaultAs: PopoverContentElement,
})

Popover.Heading = staticComponent<PopoverHeadingProps>('PopoverHeading', {
  as: 'h3',
})

Popover.Body = staticComponent<PopoverBodyProps>('PopoverBody')
