// @flow
import React from 'react'
import classNames from 'classnames'

type Props = {
  className: ?string,
  font: ?boolean,
  id: string,
  presentation: ?boolean,
}

/**
 * Use the icon component with an svg imported from `/media/icons` to create an icon
 * font.
 */
const Icon = ({
  className = '',
  font = true,
  id,
  presentation = false,
  ...rest
}: Props) => (
  <svg
    role={presentation ? 'presentation' : 'img'}
    className={classNames('icon', id, className, { font })}
    {...rest}
  >
    <use xlinkHref={`#${id}`} href={`#${id}`} />
  </svg>
)

export default Icon
