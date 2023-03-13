import React from 'react'
import { createActiveAction } from '../../utils/create-active-action-component'
import { createActiveContainer } from '../../utils/create-active-container-component'
import { createActiveContent } from '../../utils/create-active-content-component'
import { createStaticComponent } from '../../utils/create-static-component'
import { UtilityProps } from '../../utils/utility-props'
import {
  ActiveActionBaseProps,
  ActiveContainerBaseProps,
  ActiveContentBaseProps,
} from '../Active/active-types'
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
export const Popover = createActiveContainer('Popover', {
  direction: 'right',
  escEvents: true,
  mouseEvents: true,
}) as Popover

Popover.Action = createActiveAction('PopoverAction', {
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

Popover.Content = createActiveContent('PopoverContent', {
  aria: { id: true, role: 'tooltip', hidden: true },
  defaultAs: PopoverContentElement,
})

Popover.Heading = createStaticComponent<PopoverHeadingProps>('PopoverHeading', {
  as: 'h3',
})

Popover.Body = createStaticComponent<PopoverBodyProps>('PopoverBody')
