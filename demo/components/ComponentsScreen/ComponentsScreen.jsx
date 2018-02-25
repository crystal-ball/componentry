// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import { colors, directions, sizes } from 'utils/app-props'
import GroupNav from 'components/universal/GroupNav'
import componentRoutes from 'utils/component-routes'
import Header from 'components/universal/Header'

import ActiveScreen from './Screens/Active.md'
import AlertsScreen from './Screens/Alerts.md'
import ButtonsScreen from './Screens/Buttons.md'
import CardsScreen from './Screens/Cards.md'
import DrawersScreen from './Screens/Drawers.md'
import DropdownsScreen from './Screens/Dropdowns.md'
import ListGroupsScreen from './Screens/ListGroups.md'
import ModalsScreen from './Screens/Modals.md'
import NavsScreen from './Screens/Navs.md'
import PopoversScreen from './Screens/Popovers.md'
import TabsScreen from './Screens/Tabs.md'
import TooltipsScreen from './Screens/Tooltips.md'

type Props = {
  location: {
    state: { name: string },
  },
}

export default ({ location: { state } }: Props) => (
  <div className="grid-container columns-page-layout m-5">
    <div className="guides">
      <Header title={state ? state.name : 'Components'} />

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
      <Route
        path="/components/modals"
        render={() => <ModalsScreen sizes={sizes} />}
      />
      <Route path="/components/navs" component={NavsScreen} />
      <Route
        path="/components/popovers"
        render={() => <PopoversScreen directions={directions} />}
      />
      <Route path="/components/tabs" component={TabsScreen} />
      <Route path="/components/tooltips" component={TooltipsScreen} />
    </div>
    <div>
      <GroupNav routesMap={componentRoutes} />
    </div>
  </div>
)
