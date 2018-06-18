// @flow
import React, { createElement } from 'react'
import { Route } from 'react-router-dom'

import * as libProps from 'utils/lib-props'
import routesMap, { componentRoutes } from 'utils/routes-map'

import GroupNav from 'components/universal/GroupNav'
import Header from 'components/universal/Header'

type Props = {
  location: {
    state: { name: string },
  },
}

const { subRoutes } = routesMap.components

export default ({ location: { state } }: Props) => (
  <div className="grid-container columns-page-layout m-5">
    <div className="guides">
      <Header title={state ? state.name : 'Components'} />

      {Object.keys(subRoutes).map(route => (
        <Route
          key={route}
          path={subRoutes[route].pathname}
          render={() => createElement(routesMap.components.screens[route], libProps)}
        />
      ))}
    </div>
    <div>
      <GroupNav routes={componentRoutes} />
    </div>
  </div>
)
