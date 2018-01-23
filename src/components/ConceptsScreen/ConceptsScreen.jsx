// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import GroupNav from 'components/universal/GroupNav'
import Header from 'components/universal/Header'
import conceptsRoutes from 'utils/concepts-routes'

import ArchitectureScreen from 'GUIDES/Architecture.md'
import AccessibilityScreen from 'GUIDES/Accessibility.md'
import ComponentsScreen from 'GUIDES/Components.md'
import ThemingScreen from 'GUIDES/Theming.md'
import OverviewScreen from './OverviewScreen'

import { component } from './concepts-screen.scss'

type Props = {
  location: {
    state: { name: string },
  },
}

export default ({ location: { state } }: Props) => (
  <div className={`grid-container columns-page-layout m-5 ${component}`}>
    <div>
      <Header title={state ? state.name : 'Concepts'} className="mb-5" />

      <Route
        path={conceptsRoutes.accessibility.pathname}
        component={AccessibilityScreen}
      />
      <Route path={conceptsRoutes.theming.pathname} component={ThemingScreen} />
      <Route
        path={conceptsRoutes.components.pathname}
        component={ComponentsScreen}
      />
      <Route
        path={conceptsRoutes.architecture.pathname}
        component={ArchitectureScreen}
      />
      <Route
        path="/concepts"
        exact
        render={props => (
          <OverviewScreen {...props} conceptsRoutes={conceptsRoutes} />
        )}
      />
    </div>
    <div>
      <GroupNav routesMap={conceptsRoutes} />
    </div>
  </div>
)
