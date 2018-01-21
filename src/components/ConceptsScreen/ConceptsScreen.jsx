// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import GroupNav from 'components/universal/GroupNav'
import Header from 'components/universal/Header'
import conceptsRoutes from 'utils/concepts-routes'

import AccessibilityScreen from './AccessibilityScreen'
import ComponentsScreen from './ComponentsScreen'
import OverviewScreen from './OverviewScreen'
import ThemingScreen from './ThemingScreen'

import { component } from './concepts-screen.scss'

type Props = {
  location: {
    state: { name: string },
  },
}

export default ({ location: { state } }: Props) => (
  <div className={`grid-container columns-page-layout m-5 ${component}`}>
    <div>
      <Header title={state ? state.name : 'Concepts'} />

      <Route path="/concepts/accessibility" component={AccessibilityScreen} />
      <Route path="/concepts/theming" component={ThemingScreen} />
      <Route path="/concepts/component-contract" component={ComponentsScreen} />
      <Route path="/concepts" exact component={OverviewScreen} />
    </div>
    <div>
      <GroupNav routes={conceptsRoutes} />
    </div>
  </div>
)
