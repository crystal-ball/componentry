// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'componentry'

type Props = {
  className: string,
  label: string,
  subRoutes: Array<{ id: string, routeTo: {} }>,
}

const SubRoutesNav = ({ className, subRoutes, label }: Props) => (
  <Dropdown as="nav" className={className}>
    <Dropdown.Trigger color="link">{label}</Dropdown.Trigger>
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
