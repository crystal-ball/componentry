// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import GroupNav from 'components/universal/navigation/GroupNav'
import componentRoutes from 'utils/component-routes'
import Header from 'components/universal/Header'

// Component Screens
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

type Props = {
  match: {
    params: { component: string }
  }
}

export default ({ match }: Props) => {
  const { component } = match.params

  return (
    <div>
      <div className="fullscreen-row">
        <Header title={component || 'Components'} />
      </div>

      <div className="row">
        <div className="col-10">
          <Route path="/components/active" component={ActiveScreen} />
          <Route path="/components/alerts" component={AlertsScreen} />
          <Route path="/components/buttons" component={ButtonsScreen} />
          <Route path="/components/cards" component={CardsScreen} />
          <Route path="/components/drawers" component={DrawersScreen} />
          <Route path="/components/dropdowns" component={DropdownsScreen} />
          <Route path="/components/list-groups" component={ListGroupsScreen} />
          <Route path="/components/modals" component={ModalsScreen} />
          <Route path="/components/navs" component={NavsScreen} />
          <Route path="/components/popovers" component={PopoversScreen} />
          <Route path="/components/tabs" component={TabsScreen} />
          <Route path="/components/tooltips" component={TooltipsScreen} />
        </div>
        <div className="col-2">
          <GroupNav routes={componentRoutes} />
        </div>
      </div>
    </div>
  )
}
