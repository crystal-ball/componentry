import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import elementFactory from './element-factory'

describe('elementFactory', () => {
  it('should return a component of: div with children', () => {
    const Test = elementFactory()
    const wrapper = shallow(<Test>Children</Test>)
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.contains('Children'))
  })

  it('should accept a className', () => {
    const Test = elementFactory({ classes: 'test class' })
    const wrapper = shallow(<Test>Children</Test>)
    expect(wrapper.find('div.test.class')).to.have.length(1)
  })

  it('should accept a tag', () => {
    const Test = elementFactory({ tag: 'h4' })
    const wrapper = shallow(<Test>Children</Test>)
    expect(wrapper.find('h4')).to.have.length(1)
  })

  it('should prioritize and combine component invocation params', () => {
    const Test = elementFactory({ tag: 'h4', classes: 'factory' })
    const wrapper = shallow(
      <Test As="span" className="invocation">
        Children
      </Test>
    )
    expect(wrapper.find('span.factory.invocation')).to.have.length(1)
  })
})
