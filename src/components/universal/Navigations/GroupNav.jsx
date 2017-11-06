// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  routes: Array<{ name: string, path: string }>
}

/**
 * Group navs for the component and concept subroutes use a static router config.
 */
export default ({ routes }: Props) => (
  <nav>
    {routes.map(({ name, path }) => (
      <div className="pb-1" key={name}>
        <NavLink to={path} activeClassName="text-primary">
          {name}
        </NavLink>
      </div>
    ))}
  </nav>
)
