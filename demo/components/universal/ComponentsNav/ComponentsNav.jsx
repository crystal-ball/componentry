// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import componentRoutes from 'utils/component-routes'
import routesMapToArray from 'utils/routes-map-to-array'
import { Dropdown } from 'componentry'

const routesArray = routesMapToArray(componentRoutes)

const ComponentsNav = () => (
  <Dropdown as="nav">
    <Dropdown.Trigger color="link">Components</Dropdown.Trigger>
    <Dropdown.Content>
      {routesArray.map(routeTo => (
        <Dropdown.Item as={Link} to={routeTo} key={routeTo.id}>
          {routeTo.state.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Content>
  </Dropdown>
)

export default ComponentsNav
