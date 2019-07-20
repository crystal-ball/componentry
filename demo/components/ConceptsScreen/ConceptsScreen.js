// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import routesMap, { conceptRoutes } from 'lib/routes-map'

import GroupNav from 'components/universal/GroupNav'
import Header from 'components/universal/Header'

type Props = {
  location: {
    state: { name: string },
  },
}

const { subRoutes } = routesMap.concepts

export default ({ location: { state } }: Props) => (
  <div className='grid-container columns-page-layout m-5'>
    <div className='guides'>
      <Header title={state ? state.name : 'Concepts'} className='mb-3' />

      {Object.keys(subRoutes).map(route => (
        <Route
          key={route}
          path={subRoutes[route].pathname}
          component={routesMap.concepts.screens[route]}
        />
      ))}
    </div>
    <div>
      <GroupNav routes={conceptRoutes} />
    </div>
  </div>
)
