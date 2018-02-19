// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import { colors, directions, sizes } from 'utils/app-props'
import GroupNav from 'components/universal/GroupNav'
import componentRoutes from 'utils/component-routes'
import Header from 'components/universal/Header'

import ActiveScreen from './ActiveScreen'
import AlertsScreen from './AlertsScreen'
import ButtonsScreen from './ButtonsScreen'
import CardsScreen from './CardsScreen'
import DrawersScreen from './DrawersScreen'
import DropdownsScreen from './DropdownsScreen'
import ListGroupsScreen from './ListGroupsScreen'
import ModalsScreen from './ModalsScreen'
import NavsScreen from './NavsScreen'
import PopoversScreen from './PopoversScreen'
import TabsScreen from './TabsScreen'
import TooltipsScreen from './TooltipsScreen'

import { component } from './components-screen.scss'

type Props = {
  location: {
    state: { name: string },
  },
}

export default ({ location: { state } }: Props) => (
  <div className={`grid-container columns-page-layout m-5 ${component}`}>
    <div>
      <Header title={state ? state.name : 'Components'} />

      <div className="content">
        <Route path="/components/active" component={ActiveScreen} />
        <Route
          path="/components/alerts"
          render={() => <AlertsScreen colors={colors} />}
        />
        <Route
          path="/components/buttons"
          render={() => <ButtonsScreen colors={colors} sizes={sizes} />}
        />
        <Route path="/components/cards" component={CardsScreen} />
        <Route path="/components/drawers" component={DrawersScreen} />
        <Route
          path="/components/dropdowns"
          render={() => <DropdownsScreen directions={directions} />}
        />
        <Route path="/components/list-groups" component={ListGroupsScreen} />
        <Route path="/components/modals" component={ModalsScreen} />
        <Route path="/components/navs" component={NavsScreen} />
        <Route
          path="/components/popovers"
          render={() => <PopoversScreen directions={directions} />}
        />
        <Route path="/components/tabs" component={TabsScreen} />
        <Route path="/components/tooltips" component={TooltipsScreen} />
      </div>
    </div>
    <div>
      <GroupNav routesMap={componentRoutes} />
    </div>
  </div>
)
