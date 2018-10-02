import React from 'react'
import withTheme from '../withTheme'
import elem from '../elem-factory'

export default withTheme('Close', props =>
  elem({
    defaultAs: 'button',
    'aria-label': 'close',
    classes: 'btn-close',
    type: 'button',
    children: (
      <svg className="icon icon-close font" role="img">
        <use href="#close" xlinkHref="#close" />
      </svg>
    ),
    ...props,
  }),
)
