import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../test/element-tests'
import { Nav } from './Nav'

describe('<Nav />', () => {
  elementTests(Nav)

  it('should render .nav-vertical when vertical is passed', () => {
    render(
      <Nav data-testid='nav' vertical>
        <Nav.Item href='#'>Link one</Nav.Item>
      </Nav>,
    )

    expect(screen.getByTestId('nav')).toHaveClass('nav-vertical')
  })

  it('should render .nav-pills when pills is passed', () => {
    render(
      <Nav data-testid='nav' pills>
        <Nav.Item href='#'>Link one</Nav.Item>
      </Nav>,
    )

    expect(screen.getByTestId('nav')).toHaveClass('nav-pills')
  })
})

describe('<Nav.Item />', () => {
  elementTests(Nav.Item)

  it('when active is passed, then active class should render', () => {
    render(
      <Nav>
        <Nav.Item href='#' active>
          React
        </Nav.Item>
      </Nav>,
    )

    expect(screen.getByText('React')).toHaveClass('active')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Nav /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Nav data-testid='nav'>
        <Nav.Item href='#' active>
          Active
        </Nav.Item>
        <Nav.Item href='#'>React</Nav.Item>
        <Nav.Item href='#'>Redux</Nav.Item>
        <Nav.Item href='#' disabled>
          Styles
        </Nav.Item>
      </Nav>,
    )

    expect(screen.getByTestId('nav')).toMatchSnapshot()
  })
})
