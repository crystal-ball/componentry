import React from 'react'
import { staticComponent } from '../factories/static-component'

export const closeBase = {
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
export const Close = staticComponent('Close', closeBase)
