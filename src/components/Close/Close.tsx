import React from 'react'
import { type ClassValue } from 'clsx'
import { ComponentBaseProps } from '../../utils/types'
import { staticComponent } from '../../utils/static-component-builder'
import { Icon } from '../Icon/Icon'

export interface CloseProps extends ComponentBaseProps<'button'> {
  componentCx?: ClassValue
}

export const closeBase: CloseProps = {
  'aria-label': 'close',
  'as': 'button',
  'type': 'button',
  'componentCx': `🅲Close-base`,
  'children': <Icon id='close' />,
}

/**
 * [Close component 📝](https://componentry.design/components/close)
 * @experimental
 */
export const Close = staticComponent<CloseProps>('Close', closeBase)
