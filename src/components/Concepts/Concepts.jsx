// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import Header from 'components/universal/Header'
import GroupNav from 'components/universal/Navigations/GroupNav'

import Accessibility from './Accessibility'
import Theming from './Theming'

type Props = {
  match: {
    params: { concept: string }
  }
}

const conceptRoutes = [
  { name: 'A++ Accessibility', path: '/concepts/accessibility' },
  { name: 'Theme Customization', path: '/concepts/theming' }
]

export default ({ match }: Props) => {
  const { concept } = match.params

  return (
    <div>
      <div className="fullscreen-row">
        <Header title={concept || 'Concepts'} />
      </div>

      <div className="row">
        <div className="col-10">
          <Route path="/concepts/accessibility" component={Accessibility} />
          <Route path="/concepts/theming" component={Theming} />
        </div>
        <div className="col-2">
          <GroupNav routes={conceptRoutes} />
        </div>
      </div>
    </div>
  )
}
