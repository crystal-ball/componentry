// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

import type { Route } from 'lib/routes-map'

import { component } from './group-nav.scss'

type Props = {
  routes: {
    [string]: Route,
  },
}

/**
 * Group navs for the component and concept subroutes use a static router config.
 */
export default ({ routes }: Props) => (
  <nav className={`ml-5 ${component}`}>
    {routes.map(route => (
      <div className="pb-1" key={route.id}>
        <NavLink to={route} activeClassName="text-primary">
          {route.state.name}
        </NavLink>
      </div>
    ))}
  </nav>
)
