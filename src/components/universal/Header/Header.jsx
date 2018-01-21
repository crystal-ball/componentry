import React from 'react'

type Props = {
  title: string,
}

export default ({ title }: Props) => (
  <div className="mb-5 bb-secondary-1">
    <h1 className="display-3 mb-5">
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </h1>
  </div>
)
