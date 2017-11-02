import React from 'react'
import { shallow } from 'enzyme'

import ListGroupItem from './ListGroupItem'
import elementTests from '../utils-test/element-tests'

describe('<ListGroup />', () => {
  // Basic library element test suite
  elementTests(ListGroupItem)

  test('should render a container li with class list-group-item by default', () => {
    const wrapper = shallow(<ListGroupItem />)
    expect(wrapper.find('li').length).toEqual(1)
    expect(wrapper.find('.list-group-item').length).toEqual(1)
  })

  test('should render class `active` when prop is truthy', () => {
    const wrapper = shallow(<ListGroupItem />)
    expect(wrapper.find('.active').length).toBeFalsy()

    wrapper.setProps({ active: true })
    expect(wrapper.find('.active').length).toBeTruthy()
  })

  test('should render a Button when component has onclick', () => {
    const wrapper = shallow(<ListGroupItem onClick={() => {}} />)
    expect(wrapper.find('Button').length).toBeTruthy()
    expect(wrapper.find('li').length).toBeFalsy()
    expect(wrapper.find('a').length).toBeFalsy()
  })

  test('should render an anchor when component has href', () => {
    const wrapper = shallow(<ListGroupItem href="test" />)
    expect(wrapper.find('Button').length).toBeFalsy()
    expect(wrapper.find('li').length).toBeFalsy()
    expect(wrapper.find('a').length).toBeTruthy()
  })

  test('should render children', () => {
    const wrapper = shallow(
      <ListGroupItem>
        <span>Rad</span>
      </ListGroupItem>
    )
    expect(wrapper.find('span').length).toEqual(1)
  })
})
