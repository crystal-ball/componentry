import React from 'react'
import { useTheme } from '../Theme/Theme'
import elem from '../elem-factory'

export default function Close(props) {
  return elem({
    defaultAs: 'button',
    'aria-label': 'close',
    classes: 'btn-close',
    type: 'button',
    children: (
      <svg className="icon icon-close font" role="img">
        <use href="#close" xlinkHref="#close" />
      </svg>
    ),
    ...useTheme('Close'),
    ...props,
  })
}
