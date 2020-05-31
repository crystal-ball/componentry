import React from 'react'
import { render, screen } from '@testing-library/react'

import elementTests from '../../test/element-tests'
import Nav from './Nav'

describe('<Nav />', () => {
  elementTests(Nav)

  test('should render .nav-vertical when vertical is passed', () => {
    render(
      <Nav vertical data-testid='nav'>
        <Nav.Item href='#'>Anchor one</Nav.Item>
      </Nav>,
    )
    expect(screen.getByTestId('nav')).toHaveClass('nav-vertical')
  })

  test('should render .nav-pills when pills is passed', () => {
    render(
      <Nav pills data-testid='nav'>
        <Nav.Item href='#'>Anchor one</Nav.Item>
      </Nav>,
    )
    expect(screen.getByTestId('nav')).toHaveClass('nav-pills')
  })
})

describe('<Nav.Item />', () => {
  elementTests(Nav.Item)

  test('when active is passed, then active class should render', () => {
    render(
      <Nav>
        <Nav.Item active href='#'>
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
    const { container } = render(
      <Nav>
        <Nav.Item active href='#'>
          Active
        </Nav.Item>
        <Nav.Item href='#'>React</Nav.Item>
        <Nav.Item href='#'>Redux</Nav.Item>
        <Nav.Item disabled href='#'>
          Styles
        </Nav.Item>
      </Nav>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
