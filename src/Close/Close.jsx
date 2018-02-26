import React from 'react'

import { BaseButton } from '../Button/Button'
import elementFactory from '../component-factories/element'

export default elementFactory('Close', {
  className: 'btn-close',
  tag: BaseButton,
  children: (
    <svg className="icon close font" role="img" aria-label="close">
      <use href="#close" />
    </svg>
  ),
})
