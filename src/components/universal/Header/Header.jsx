// @flow
import React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string,
  title: string,
}

export default ({ title, className = '' }: Props) => (
  <div className={classNames('bb-secondary-1', className)}>
    <h1 className="display-3 mb-5">
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </h1>
  </div>
)
