import React, { createElement } from 'react'
import { Route } from 'react-router-dom'

import * as libProps from 'lib/lib-props'
import routesMap, { componentRoutes } from 'lib/routes-map'

import GroupNav from 'components/universal/GroupNav'
import Header from 'components/universal/Header'

// type Props = {
//   location: {
//     state: { name: string },
//   },
// }

const { subRoutes } = routesMap.components

// Utility transforms an object of props into a string representation
const renderPropsText = props => {
  let text = ''

  Object.keys(props).forEach(prop => {
    const value = props[prop]
    switch (typeof value) {
      case 'boolean':
        if (value) text += ` ${prop}`
        break
      default:
        if (value !== null) text += ` ${prop}="${value}"`
    }
  })

  return text
}

export default ({ location: { state } }) => (
  <div className="grid-container columns-page-layout m-5">
    <div className="guides">
      <Header title={state ? state.name : 'Components'} />

      {Object.keys(subRoutes).map(route => (
        <Route
          key={route}
          path={subRoutes[route].pathname}
          render={() =>
            createElement(routesMap.components.screens[route], {
              ...libProps,
              renderPropsText,
            })
          }
        />
      ))}
    </div>
    <div>
      <GroupNav routes={componentRoutes} />
    </div>
  </div>
)
