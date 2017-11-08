// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import Header from 'components/universal/Header'
import GroupNav from 'components/universal/Navigations/GroupNav'

import Accessibility from './Accessibility'
import Theming from './Theming'
import Components from './Components'
import Overview from './Overview'
import conceptsRoutes from './concepts-routes'
import { component } from './concepts.scss'

type Props = {
  location: {
    state: { name: string }
  }
}

export default ({ location: { state } }: Props) => (
  <div className={component}>
    <div className="fullscreen-row">
      <Header title={state ? state.name : 'Concepts'} />
    </div>

    <div className="row">
      <div className="col-10">
        <Route path="/concepts/accessibility" component={Accessibility} />
        <Route path="/concepts/theming" component={Theming} />
        <Route path="/concepts/component-contract" component={Components} />
        <Route path="/concepts" exact component={Overview} />
      </div>
      <div className="col-2">
        <GroupNav routes={conceptsRoutes} />
      </div>
    </div>
  </div>
)
