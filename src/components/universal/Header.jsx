import React from 'react'

type Props = {
  title: string
}

export default ({ title = 'Components' }: Props) => (
  <div className="jumbotron jumbotron-fluid bg-secondary">
    <div className="container">
      <h1 className="display-3 text-light">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
    </div>
  </div>
)
