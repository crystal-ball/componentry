// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import GroupNav from 'components/universal/Navigations/GroupNav'
import componentRoutes from 'utils/component-routes'
import Header from 'components/universal/Header'

// Component Screens
import ActiveState from './ActiveState'
import Alerts from './Alerts'
import Buttons from './Buttons'
import Cards from './Cards'
import Drawers from './Drawers'
import Dropdowns from './Dropdowns'
import ListGroups from './ListGroups'
import Modals from './Modals'
import Navs from './Navs'
import Popovers from './Popovers'
import Tabs from './Tabs'
import Tooltips from './Tooltips'

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
          <Route path="/components/state" component={ActiveState} />
          <Route path="/components/alerts" component={Alerts} />
          <Route path="/components/buttons" component={Buttons} />
          <Route path="/components/cards" component={Cards} />
          <Route path="/components/drawers" component={Drawers} />
          <Route path="/components/dropdowns" component={Dropdowns} />
          <Route path="/components/list-groups" component={ListGroups} />
          <Route path="/components/modals" component={Modals} />
          <Route path="/components/navs" component={Navs} />
          <Route path="/components/popovers" component={Popovers} />
          <Route path="/components/tabs" component={Tabs} />
          <Route path="/components/tooltips" component={Tooltips} />
        </div>
        <div className="col-2">
          <GroupNav routes={componentRoutes} />
        </div>
      </div>
    </div>
  )
}
