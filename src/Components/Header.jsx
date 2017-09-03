import React from 'react'
import { string } from 'prop-types'

Header.propTypes = {
  title: string
}

Header.defaultProps = {
  title: 'Components'
}

export default function Header({ title }) {
  return (
    <div className="jumbotron jumbotron-fluid bg-primary">
      <div className="container">
        <h1 className="display-3 text-light">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>
      </div>
    </div>
  )
}
