// @flow
import React from 'react'

export default () => (
  <div>
    <h1>Theming</h1>
    <p className="lead">
      Componentry is designed to enable complete customizatino without burdening
      development worklfow. There are a few conventions that Componentry follows and
      encourages to make customizing your application easier.
    </p>
    <ul>
      <li>Theme variables are nested in `context.THEME`</li>
      <li>
        Customize icons with SVGs, use `$include-icons` for background-image styles
      </li>
      <li>Theme options</li>
      <h2>Customizing Icons</h2>
    </ul>
  </div>
)
