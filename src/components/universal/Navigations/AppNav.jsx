// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import { Dropdown } from '../../../../lib'
import componentRoutes from './component-routes'
import github from '../github'

/**
 * App navigation is shown on pages that are not home or component guides.
 */
export default () => (
  <header className="bg-primary p-4 mb-5 d-flex justify-content-between">
    {/* Non Component Pages */}
    <div className="d-flex">
      <div className="pr-3 d-flex align-items-center">
        <Link to="/" className="text-light">
          Home
        </Link>
      </div>
      <div className="pr-3 d-flex align-items-center">
        <Link to="/getting-started" className="text-light">
          Get Started
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <Link to="/concepts" className="text-light">
          Concepts
        </Link>
      </div>
    </div>

    {/* Component dropdown navigation */}
    <div className="d-flex align-items-center">
      <Dropdown as="nav">
        <Dropdown.Trigger color="light" outline>
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
      {/* Github Link */}
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
