import React from 'react'

import { BaseButton } from '../Button/Button'
import elementFactory from '../component-factories/element-factory'

const Close = elementFactory({
  name: 'Close',
  classes: 'btn-close',
  tag: BaseButton,
  children: (
    <svg className="icon close font" role="img" aria-label="close">
      <use href="#close" />
    </svg>
  ),
})

export default Close
