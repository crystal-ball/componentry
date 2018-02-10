// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import componentRoutes from 'utils/component-routes'
import routesMapToArray from 'utils/routes-map-to-array'
import { Dropdown } from 'componentry'

type Props = {
  color: string,
  outline?: boolean,
}

const defaultProps = {
  outline: true,
}

const ComponentsNav = ({ color, outline = true }: Props) => {
  const routesArray = routesMapToArray(componentRoutes)

  return (
    <Dropdown as="nav">
      <Dropdown.Trigger color={color} outline={outline}>
        Components
      </Dropdown.Trigger>
      <Dropdown.Content>
        {routesArray.map(routeTo => (
          <Dropdown.Item as={Link} to={routeTo} key={routeTo.id}>
            {routeTo.state.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown>
  )
}

ComponentsNav.defaultProps = defaultProps
export default ComponentsNav
