import React from 'react'
import { string } from 'prop-types'

export default function Header({ title }) {
  title = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <div className="jumbotron jumbotron-fluid bg-primary">
      <div className="container">
        <h1 className="display-3 text-light">{title}</h1>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: string
}

Header.defaultProps = {
  title: 'Components'
}
