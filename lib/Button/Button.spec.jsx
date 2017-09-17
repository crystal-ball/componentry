import React from 'react'
import { shallow } from 'enzyme'

import Button from './index'

describe('<Button/>', () => {
  test('should render a button element default', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('.btn').length).toEqual(1)
    expect(wrapper.find('button[type="button"]').length).toEqual(1)
  })

  test('should render any brand classes for prop color', () => {
    const wrapper = shallow(<Button color="info" />)
    expect(wrapper.find('.btn.btn-info').length).toEqual(1)
  })

  test('should render outline class for prop outline', () => {
    const wrapper = shallow(<Button color="primary" outline />)
    // Even though color is passed, primary flag should override
    expect(wrapper.find('.btn.btn-primary').length).toEqual(0)
    expect(wrapper.find('.btn.btn-outline-primary').length).toEqual(1)
  })

  test('should render class for small button', () => {
    const wrapper = shallow(<Button size="small" />)
    expect(wrapper.find('.btn.btn-sm').length).toEqual(1)
  })

  test('should render class for large button', () => {
    const wrapper = shallow(<Button size="large" />)
    expect(wrapper.find('.btn.btn-lg').length).toEqual(1)
  })

  test('should render any passed className', () => {
    const wrapper = shallow(<Button className="special classes" />)
    expect(wrapper.find('.btn.special.classes').length).toEqual(1)
  })

  test('should render any other passed attributes', () => {
    const wrapper = shallow(<Button data-test="totally-rad" />)
    expect(wrapper.find('[data-test="totally-rad"]').length).toEqual(1)
  })

  test('should not render class btn-anchor without passed prop', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button.btn-anchor').length).toEqual(0)
  })

  test('should render class btn-anchor when passed prop', () => {
    const wrapper = shallow(<Button link />)
    expect(wrapper.find('button.btn-anchor').length).toEqual(1)
  })

  test('should render a passed type', () => {
    const wrapper = shallow(<Button type="reset" />)
    expect(wrapper.find('button[type="reset"]').length).toEqual(1)
  })

  test('should render children', () => {
    const wrapper = shallow(
      <Button>
        <span>Rad</span>
      </Button>
    )
    expect(wrapper.find('span').length).toEqual(1)
  })

  test('simulates click events', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(<Button onClick={onButtonClick} />)
    wrapper.find('button').simulate('click')
    expect(onButtonClick).toHaveBeenCalled()
  })

  // Check that outline blur handler doesn't interfere with passing `onMouseDown`
  test('attaches onMouseDown events correctly', () => {
    const onMouseDown = jest.fn()
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

    expect(onMouseDown).toHaveBeenCalled()
  })
})
