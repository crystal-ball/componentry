import React from 'react'
import { staticComponent } from '../../utils/static-component-builder'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { Icon } from '../Icon/Icon'

// Module augmentation interface for overriding component props' types
export interface ClosePropsOverrides {}

export interface ClosePropsDefaults {}

export type CloseProps = Resolve<MergeTypes<ClosePropsDefaults, ClosePropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithoutRef<'button'>

export const closeBase: CloseProps & { componentCx: string } = {
  as: 'button',
  type: 'button',
  componentCx: `C9Y-Close-base`,
  children: <Icon id='close' />,
}

/**
 * [Close component 📝](https://componentry.design/components/close)
 * @experimental
 */
export const Close = staticComponent<CloseProps>('Close', closeBase)
