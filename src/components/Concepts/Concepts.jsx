// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import Header from 'components/universal/Header'
import GroupNav from 'components/universal/Navigations/GroupNav'

import Accessibility from './Accessibility'
import Theming from './Theming'
import Components from './Components'

type Props = {
  location: {
    state: { name: string }
  }
}

const conceptRoutes = [
  { name: 'A++ Accessibility', path: '/concepts/accessibility' },
  { name: 'Theme Customization', path: '/concepts/theming' },
  { name: 'Component APIs', path: '/concepts/component-contract' }
]

export default ({ location }: Props) => (
  <div>
    <div className="fullscreen-row">
      <Header title={location.state.name || 'Concepts'} />
    </div>

    <div className="row">
      <div className="col-10">
        <Route path="/concepts/accessibility" component={Accessibility} />
        <Route path="/concepts/theming" component={Theming} />
        <Route path="/concepts/component-contract" component={Components} />
      </div>
      <div className="col-2">
        <GroupNav routes={conceptRoutes} />
      </div>
    </div>
  </div>
)
