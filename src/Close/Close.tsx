/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { ComponentBaseProps } from '../utils/types'
import { staticComponent } from '../utils/static-component-builder'

export interface CloseProps extends ComponentBaseProps<'button'> {}

export const closeBase: CloseProps = {
  'aria-label': 'close',
  'as': 'button',
  'type': 'button',
  'children': (
    <svg className='🅲-icon icon-close font-variant' role='img'>
      <use href='#close' xlinkHref='#close' />
    </svg>
  ),
}

/**
 * [Close component 📝](https://componentry.design/components/close)
 * @experimental
 */
export const Close = staticComponent<CloseProps>('Close', closeBase)
