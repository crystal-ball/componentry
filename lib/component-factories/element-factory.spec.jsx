import React from 'react'
import { shallow } from 'enzyme'

import elementFactory from './element-factory'

describe('elementFactory', () => {
  test('should return a component of: div with children', () => {
    const Test = elementFactory({ name: 'Test' })
    const wrapper = shallow(<Test>Children</Test>)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.contains('Children')).toBeTruthy()
  })

  test('should accept a className', () => {
    const Test = elementFactory({ classes: 'test class', name: 'Test' })
    const wrapper = shallow(<Test>Children</Test>)
    expect(wrapper.find('div.test.class').length).toEqual(1)
  })

  test('should accept a tag', () => {
    const Test = elementFactory({ tag: 'h4', name: 'Test' })
    const wrapper = shallow(<Test>Children</Test>)
    expect(wrapper.find('h4').length).toEqual(1)
  })

  test('should prioritize and combine component invocation params', () => {
    const Test = elementFactory({ tag: 'h4', classes: 'factory', name: 'Test' })
    const wrapper = shallow(
      <Test as="span" className="invocation">
        Children
      </Test>
    )
    expect(wrapper.find('span.factory.invocation').length).toEqual(1)
  })
})
