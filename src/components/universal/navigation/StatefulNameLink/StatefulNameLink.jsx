// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  path: string,
  name: string
}

/**
 * Link includes the name as state in the location object passed to React Router
 */
export default ({ path, name }: Props) => (
  <NavLink to={{ pathname: path, state: { name } }} activeClassName="text-primary">
    {name}
  </NavLink>
)
