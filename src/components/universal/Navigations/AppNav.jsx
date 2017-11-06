// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import ComponentsNav from './ComponentsNav'
import github from '../github'

/**
 * App navigation is shown on pages that are not home or component guides.
 */
export default () => (
  <header className="bg-primary p-4 mb-5 d-flex justify-content-between">
    {/* Group level routes */}
    <div className="d-flex">
      {[
        { name: 'Home', to: '/' },
        { name: 'Get Started', to: '/getting-started' },
        { name: 'Concepts', to: '/concepts' }
      ].map(route => (
        <div className="pr-3 d-flex align-items-center" key={route.name}>
          <Link to={route.to} className="text-light">
            {route.name}
          </Link>
        </div>
      ))}
    </div>

    {/* Component dropdown navigation */}
    <div className="d-flex align-items-center">
      <ComponentsNav color="light" />
      <div className="pl-3">
        <a
          className="text-light h2"
          href="https://github.com/crystal-ball/componentry"
        >
          {github}
        </a>
      </div>
    </div>
  </header>
)
