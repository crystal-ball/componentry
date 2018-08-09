import React from 'react'

import Button from '../Button/Button'
import elementFactory from '../component-factories/element'

export default elementFactory('Close', {
  className: 'btn-close',
  tag: Button,
  // Don't include base btn decoration class
  decorated: false,
  children: (
    <svg className="icon close font" role="img" aria-label="close">
      <use href="#close" xlinkHref="#close" />
    </svg>
  ),
})
