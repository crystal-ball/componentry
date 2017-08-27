import React from 'react'
import { Route } from 'react-router-dom'
import { object } from 'prop-types'

import Nav from './Nav'
import Header from './Header'
import Alerts from './Alerts'
import Buttons from './Buttons'
import Cards from './Cards'
import Drawers from './Drawers'
import Dropdowns from './Dropdowns'
import Icons from './Icons'
import ListGroups from './ListGroups'
import Modals from './Modals'
import Popovers from './Popovers'
import Tooltips from './Tooltips'

export default function Components({ match }) {
  const { component } = match.params

  return (
    <div>
      <div className="fullscreen-row">
        <Header title={component} />
      </div>

      <div className="row">
        <div className="col-9">
          <Route path="/components/alerts" component={Alerts} />
          <Route path="/components/buttons" component={Buttons} />
          <Route path="/components/cards" component={Cards} />
          <Route path="/components/drawers" component={Drawers} />
          <Route path="/components/dropdowns" component={Dropdowns} />
          <Route path="/components/icons" component={Icons} />
          <Route path="/components/list-groups" component={ListGroups} />
          <Route path="/components/modals" component={Modals} />
          <Route path="/components/popovers" component={Popovers} />
          <Route path="/components/tooltips" component={Tooltips} />
        </div>
        <div className="col-3">
          <Nav />
        </div>
      </div>
    </div>
  )
}

Components.propTypes = {
  match: object.isRequired // eslint-disable-line
}
