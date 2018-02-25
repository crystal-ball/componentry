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
import CloseScreen from './Screens/Close.md'
import DrawersScreen from './Screens/Drawers.md'
import DropdownsScreen from './Screens/Dropdowns.md'
import IconsScreen from './Screens/Icons.md'
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

      <Route path={componentRoutes.active.pathname} component={ActiveScreen} />
      <Route
        path={componentRoutes.alerts.pathname}
        render={() => <AlertsScreen colors={colors} />}
      />
      <Route
        path={componentRoutes.buttons.pathname}
        render={() => <ButtonsScreen colors={colors} sizes={sizes} />}
      />
      <Route path={componentRoutes.cards.pathname} component={CardsScreen} />
      <Route path={componentRoutes.close.pathname} component={CloseScreen} />
      <Route path={componentRoutes.drawers.pathname} component={DrawersScreen} />
      <Route
        path={componentRoutes.dropdowns.pathname}
        render={() => <DropdownsScreen directions={directions} />}
      />
      <Route path={componentRoutes.icons.pathname} component={IconsScreen} />
      <Route
        path={componentRoutes.listGroups.pathname}
        component={ListGroupsScreen}
      />
      <Route
        path={componentRoutes.modals.pathname}
        render={() => <ModalsScreen sizes={sizes} />}
      />
      <Route path={componentRoutes.navs.pathname} component={NavsScreen} />
      <Route
        path={componentRoutes.popovers.pathname}
        render={() => <PopoversScreen directions={directions} />}
      />
      <Route path={componentRoutes.tabs.pathname} component={TabsScreen} />
      <Route path={componentRoutes.tooltips.pathname} component={TooltipsScreen} />
    </div>
    <div>
      <GroupNav routesMap={componentRoutes} />
    </div>
  </div>
)
