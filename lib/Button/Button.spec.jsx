import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import Button from './Button'

describe('<Button/>', () => {
  it('should render a button element default', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).to.have.length(1)
    expect(wrapper.find('.btn')).to.have.length(1)
    expect(wrapper.find('button[type="button"]')).to.have.length(1)
  })

  it('should render any brand classes for prop color', () => {
    const wrapper = shallow(<Button color="info" />)
    expect(wrapper.find('.btn.btn-info')).to.have.length(1)
  })

  it('should render outline class for prop outline', () => {
    const wrapper = shallow(<Button color="primary" outline />)
    // Even though color is passed, primary flag should override
    expect(wrapper.find('.btn.btn-primary')).to.have.length(0)
    expect(wrapper.find('.btn.btn-outline-primary')).to.have.length(1)
  })

  it('should render class for small button', () => {
    const wrapper = shallow(<Button size="small" />)
    expect(wrapper.find('.btn.btn-sm')).to.have.length(1)
  })

  it('should render class for large button', () => {
    const wrapper = shallow(<Button size="large" />)
    expect(wrapper.find('.btn.btn-lg')).to.have.length(1)
  })

  it('should render any passed className', () => {
    const wrapper = shallow(<Button className="special classes" />)
    expect(wrapper.find('.btn.special.classes')).to.have.length(1)
  })

  it('should render any other passed attributes', () => {
    const wrapper = shallow(<Button data-test="totally-rad" />)
    expect(wrapper.find('[data-test="totally-rad"]')).to.have.length(1)
  })

  it('should not render class btn-anchor without passed prop', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button.btn-anchor')).to.have.length(0)
  })

  it('should render class btn-anchor when passed prop', () => {
    const wrapper = shallow(<Button link />)
    expect(wrapper.find('button.btn-anchor')).to.have.length(1)
  })

  it('should render a passed type', () => {
    const wrapper = shallow(<Button type="reset" />)
    expect(wrapper.find('button[type="reset"]')).to.have.length(1)
  })

  it('should render children', () => {
    const wrapper = shallow(
      <Button>
        <span>Rad</span>
      </Button>
    )
    expect(wrapper.find('span')).to.have.length(1)
  })

  it('simulates click events', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(<Button onClick={onButtonClick} />)
    wrapper.find('button').simulate('click')
    expect(onButtonClick.calledOnce).to.equal(true)
  })

  // Check that outline blur handler doesn't interfere with passing `onMouseDown`
  it('attaches onMouseDown events correctly', () => {
    const onMouseDown = sinon.spy()
    const wrapper = shallow(<Button onMouseDown={onMouseDown} />)

    // Pass a mocked `evt` object to `simulate` with required props for
    // suppressClickOutline handler
    wrapper.find('button').simulate('mousedown', {
      target: {
        style: { outline: '' },
        addEventListener: () => {},
        removeEventListener: () => {}
      }
    })

    expect(onMouseDown.calledOnce).to.equal(true)
  })
})
