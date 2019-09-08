import React from 'react'
import { render } from '@testing-library/react'

import { Nav } from './Navs'
import elementTests from '../../test/element-tests'

describe('<Nav />', () => {
  elementTests(Nav)

  test('should render .nav-vertical when vertical is passed', () => {
    const { getByTestId } = render(
      <Nav vertical data-testid='nav'>
        <Nav.Item href='#'>Anchor one</Nav.Item>
      </Nav>,
    )
    expect(getByTestId('nav')).toHaveClass('nav-vertical')
  })

  test('should render .nav-pills when pills is passed', () => {
    const { getByTestId } = render(
      <Nav pills data-testid='nav'>
        <Nav.Item href='#'>Anchor one</Nav.Item>
      </Nav>,
    )
    expect(getByTestId('nav')).toHaveClass('nav-pills')
  })
})

describe('<Nav.Item />', () => {
  elementTests(Nav.Item)

  test('when active is passed, then active class should render', () => {
    const { getByText } = render(
      <Nav>
        <Nav.Item href='#' active>
          React
        </Nav.Item>
      </Nav>,
    )
    expect(getByText('React')).toHaveClass('active')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Nav /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Nav>
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

    expect(container.firstChild).toMatchSnapshot()
  })
})
