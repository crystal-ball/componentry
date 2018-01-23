// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

import routesMapToArray from 'utils/routes-map-to-array'
import type { Route } from 'utils/routes-map-to-array'
import { component } from './group-nav.scss'

type Props = {
  routesMap: {
    [string]: Route,
  },
}

/**
 * Group navs for the component and concept subroutes use a static router config.
 */
export default ({ routesMap }: Props) => {
  const routesArray = routesMapToArray(routesMap)

  return (
    <nav className={component}>
      {routesArray.map(routeTo => (
        <div className="pb-1" key={routeTo.id}>
          <NavLink to={routeTo} activeClassName="text-primary">
            {routeTo.state.name}
          </NavLink>
        </div>
      ))}
    </nav>
  )
}
