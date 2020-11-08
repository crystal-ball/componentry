import React from 'react'
import cx from 'classnames'
import { BaseProps } from '../utils/base-types'
import { staticComponent } from '../utils/static-component-builder'

export interface CloseProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {}

export interface CloseBase extends CloseProps {
  componentCx: Parameters<typeof cx>[0]
}

export const closeBase: CloseBase = {
  'aria-label': 'close',
  'as': 'button',
  'componentCx': 'close',
  'type': 'button',
  'children': (
    <svg className='icon icon-close font' role='img'>
      <use href='#close' xlinkHref='#close' />
    </svg>
  ),
}

/**
 * [Close component 📝](https://componentry.design/components/close)
 */
export const Close = staticComponent<CloseProps>('Close', closeBase)
