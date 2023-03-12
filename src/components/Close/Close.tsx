import React from 'react'
import { createStaticComponent } from '../../utils/create-static-component'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-props'
import { Icon } from '../Icon/Icon'

// Module augmentation interface for overriding component props' types
export interface ClosePropsOverrides {}

export interface ClosePropsDefaults {}

export type CloseProps = Resolve<MergeTypes<ClosePropsDefaults, ClosePropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithoutRef<'button'> & { as?: React.ElementType }

export const closeBase: CloseProps & { componentClassName: string } = {
  as: 'button',
  type: 'button',
  componentClassName: `C9Y-Close-base`,
  children: <Icon id='close' />,
}

/**
 * [Close component 📝](https://componentry.design/components/close)
 * @experimental
 */
export const Close = createStaticComponent<CloseProps>('Close', closeBase)
