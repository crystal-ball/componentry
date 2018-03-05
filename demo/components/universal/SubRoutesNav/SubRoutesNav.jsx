// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon } from 'componentry'

type Props = {
  label: string,
  subRoutes: Array<{ id: string, routeTo: {} }>,
}

const SubRoutesNav = ({ subRoutes, label }: Props) => (
  <Dropdown as="nav">
    <Dropdown.Trigger color="link">
      {label} <Icon id="chevron" />
    </Dropdown.Trigger>
    <Dropdown.Content className="dropdown-menu-right">
      {subRoutes.map(routeTo => (
        <Dropdown.Item as={Link} to={routeTo} key={routeTo.id}>
          {routeTo.state.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Content>
  </Dropdown>
)

export default SubRoutesNav
