// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import { Dropdown } from '../../../../lib'
import componentRoutes from './component-routes'

type Props = {
  color: string,
  outline?: boolean
}

export default ({ color, outline = true }: Props) => (
  <Dropdown as="nav">
    <Dropdown.Trigger color={color} outline={outline}>
      Components
    </Dropdown.Trigger>
    <Dropdown.Content>
      {componentRoutes.map(({ name, path }) => (
        <Dropdown.Item as={Link} to={path} key={name}>
          {name}
        </Dropdown.Item>
      ))}
    </Dropdown.Content>
  </Dropdown>
)
