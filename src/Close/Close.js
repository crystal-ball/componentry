import React from 'react'
import simpleComponent from '../simple-component-factory'

export const closeBase = {
  'aria-label': 'close',
  'as': 'button',
  'elemClassName': 'close',
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
export default simpleComponent('Close', closeBase)
