// @flow
import React, { createElement } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

type Props = {
  /* eslint-disable react/no-unused-prop-types */
  className: ?string,
  font: ?boolean,
  id: string,
}

type Context = { THEME: { Icon: {} } }

/**
 * ⚠️ Requires SVGs are inlined into document somewhere
 */
const Icon = (props: Props, { THEME = {} }: Context) => {
  const componentCtx = THEME.Icon || {}
  const { className = '', font = true, id, ...rest } = {
    ...componentCtx,
    ...props,
  }

  return createElement(
    'svg',
    {
      role: 'img',
      className: classNames('icon', id, componentCtx.className, className, {
        font,
      }),
      ...rest,
    },
    <use href={`#${id}`} />,
  )
}

Icon.displayName = 'Icon'
Icon.contextTypes = { THEME: shape({ Icon: object }) }
export default Icon
