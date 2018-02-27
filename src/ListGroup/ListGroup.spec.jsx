import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import ListGroup from './ListGroup'
import elementTests from '../utils-test/element-tests'

describe('<ListGroup />', () => {
  // Basic library element test suite
  elementTests(ListGroup)

  test('should render a container ul with class list-group by default', () => {
    const wrapper = shallow(<ListGroup />)
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('.list-group').length).toEqual(1)
  })

  test('should render a div when children have onclick', () => {
    const wrapper = shallow(
      <ListGroup>
        <ListGroup.Item onClick={() => {}} />
      </ListGroup>,
    )
    expect(wrapper.find('ul').length).toBeFalsy()
    expect(wrapper.find('div').length).toBeTruthy()
  })

  test('should render a div when children have hrefs', () => {
    const wrapper = shallow(
      <ListGroup>
        <ListGroup.Item href="test" />
      </ListGroup>,
    )
    expect(wrapper.find('ul').length).toBeFalsy()
    expect(wrapper.find('div').length).toBeTruthy()
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<ListGroup /> snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ListGroup>
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
        </ListGroup>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
