import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Nav from './Nav'
import elementTests from '../utils-test/element-tests'

describe('<Nav />', () => {
  // Basic library element test suite
  elementTests(Nav)

  test('should render .flex-column when vertical is passed', () => {
    const wrapper = shallow(
      <Nav vertical>
        <Nav.Item href="#">Anchor one</Nav.Item>
      </Nav>,
    )
    expect(wrapper.find('nav.flex-column').length).toBeTruthy()
  })

  test('should render .nav-pills when pills is passed', () => {
    const wrapper = shallow(
      <Nav pills>
        <Nav.Item href="#">Anchor one</Nav.Item>
      </Nav>,
    )
    expect(wrapper.find('nav.nav-pills').length).toBeTruthy()
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Nav /> snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Nav>
          <Nav.Item href="#">Anchor one</Nav.Item>
        </Nav>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
