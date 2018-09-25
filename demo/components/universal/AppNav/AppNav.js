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
const AppNav = () => (
  <Flex as="header" justify="between" className={`${component} bg-gray-100 p-4 mb-5`}>
    <Link to="/" className="text-primary logo">
      <u>C</u>
      omponentry
    </Link>

    <Flex align="center">
      <Anchor to={routesMap.setup.pathname} className="text-primary pr-3">
        {routesMap.setup.name}
      </Anchor>

      <SubRoutesNav label="Concepts" subRoutes={conceptRoutes} className="pr-3" />

      <SubRoutesNav label="Components" subRoutes={componentRoutes} className="pr-3" />

      <Anchor
        className="d-flex text-primary h2 mb-0"
        href="https://github.com/crystal-ball/componentry"
      >
        <Icon id="github" font={false} />
      </Anchor>
    </Flex>
  </Flex>
)

export default AppNav
