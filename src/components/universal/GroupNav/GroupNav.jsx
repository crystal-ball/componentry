// @flow
import React from 'react'

import StatefulNameLink from '../StatefulNameLink'
import { component } from './group-nav.scss'

type Props = {
  routes: Array<{ name: string, path: string, id: string }>,
}

/**
 * Group navs for the component and concept subroutes use a static router config.
 */
export default ({ routes }: Props) => (
  <nav className={component}>
    {routes.map(({ name, path, id }) => (
      <div className="pb-1" key={id}>
        <StatefulNameLink {...{ name, path }} />
      </div>
    ))}
  </nav>
)
