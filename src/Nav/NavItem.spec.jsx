import React from 'react'
import { shallow } from 'enzyme'

import NavItem from './NavItem'
import elementTests from '../utils-test/element-tests'

describe('<NavItem />', () => {
  // Basic library element test suite
  elementTests(NavItem)

  test('should render an anchor with class nav-item by default', () => {
    const wrapper = shallow(<NavItem />)
    expect(wrapper.find('a').length).toEqual(1)
    expect(wrapper.find('.nav-item').length).toEqual(1)
  })

  test('should render a Button when passed an onClick', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<NavItem onClick={handleClick} />)

    expect(wrapper.find('Button').length).toEqual(1)
  })
})
