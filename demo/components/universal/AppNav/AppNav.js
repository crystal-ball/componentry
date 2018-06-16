// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'componentry'

import routesMap, { componentRoutes, conceptRoutes } from 'utils/routes-map'

import SubRoutesNav from '../SubRoutesNav'

import { component } from './app-nav.scss'

/**
 * App navigation is shown on pages that are not home or component guides.
 */
export default () => (
  <header
    className={`${component} bg-gray-100 p-4 mb-5 d-flex justify-content-between`}
  >
    {/* Home route */}
    <div className="d-flex">
      <div className="pr-3 d-flex align-items-center">
        <Link to="/" className="text-primary logo">
          <u>C</u>omponentry
        </Link>
      </div>
    </div>

    <div className="d-flex align-items-center">
      {/* Library setup */}
      <Link to={routesMap.setup.pathname} className="text-primary pr-2">
        {routesMap.setup.name}
      </Link>

      {/* Concepts dropdown navigation */}
      <SubRoutesNav label="Concepts" subRoutes={conceptRoutes} />

      {/* Component dropdown navigation */}
      <SubRoutesNav label="Components" subRoutes={componentRoutes} />

      {/* Github link */}
      <div className="pl-3">
        <a
          className="text-primary h2"
          href="https://github.com/crystal-ball/componentry"
        >
          <Icon id="github" font={false} />
        </a>
      </div>
    </div>
  </header>
)
