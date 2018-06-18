// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Anchor, Flex, Icon } from 'componentry'

import routesMap, { componentRoutes, conceptRoutes } from 'utils/routes-map'

import SubRoutesNav from '../SubRoutesNav'

import { component } from './app-nav.scss'

/**
 * App navigation is shown on pages that are not home or component guides.
 */
export default () => (
  <Flex as="header" justify="between" className={`${component} bg-gray-100 p-4 mb-5`}>
    {/* Home route */}
    <Flex>
      <Flex align="center" className="pr-3">
        <Link to="/" className="text-primary logo">
          <u>C</u>omponentry
        </Link>
      </Flex>
    </Flex>

    <Flex align="center">
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
        <Anchor
          className="text-primary h2"
          href="https://github.com/crystal-ball/componentry"
        >
          <Icon id="github" font={false} />
        </Anchor>
      </div>
    </Flex>
  </Flex>
)
