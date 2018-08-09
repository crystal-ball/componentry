import React, { createElement } from 'react'
import classnames from 'classnames'
import withTheme from '../withTheme/withTheme'
import { type ElementProps } from '../component-factories/element'

const Close = ({ as, className, ...rest }: ElementProps) =>
  createElement(
    as || 'button',
    {
      type: 'button',
      'aria-label': 'close',
      className: classnames('btn-close', className),
      ...rest,
    },
    <svg className="icon close font" role="img">
      <use href="#close" xlinkHref="#close" />
    </svg>,
  )
Close.displayName = 'Close'

export default withTheme('Close')(Close)
