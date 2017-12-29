// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import Header from 'components/universal/Header'
import GroupNav from 'components/universal/navigation/GroupNav'
import conceptsRoutes from 'utils/concepts-routes'

import AccessibilityScreen from './AccessibilityScreen'
import ThemingScreen from './ThemingScreen'
import ComponentsScreen from './ComponentsScreen'
import OverviewScreen from './OverviewScreen'

import { component } from './concepts-screen.scss'

type Props = {
  location: {
    state: { name: string },
  },
}

export default ({ location: { state } }: Props) => (
  <div className={component}>
    <div className="fullscreen-row">
      <Header title={state ? state.name : 'Concepts'} />
    </div>

    <div className="row">
      <div className="col-10">
        <Route path="/concepts/accessibility" component={AccessibilityScreen} />
        <Route path="/concepts/theming" component={ThemingScreen} />
        <Route path="/concepts/component-contract" component={ComponentsScreen} />
        <Route path="/concepts" exact component={OverviewScreen} />
      </div>
      <div className="col-2">
        <GroupNav routes={conceptsRoutes} />
      </div>
    </div>
  </div>
)
