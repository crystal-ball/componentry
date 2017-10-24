// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import componentRoutes from './component-routes'

export default () => (
  <nav>
    {componentRoutes.map(({ name, path }) => (
      <div className="pb-1" key={name}>
        <NavLink to={path} activeClassName="active">
          {name}
        </NavLink>
      </div>
    ))}
    <hr />
    <div className="pb-1">
      <Link to="/">Home</Link>
    </div>
    <div className="pb-1">
      <Link to="/getting-started">Get Started</Link>
    </div>
    <div className="pb-1">
      <Link to="/accessibility">Accessibility</Link>
    </div>
  </nav>
)
