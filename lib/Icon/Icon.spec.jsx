import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon'

describe('<Icon/>', () => {
  test('should render an SVG element with class font by default', () => {
    const wrapper = shallow(<Icon icon="close" />)
    expect(wrapper.find('svg').length).toEqual(1)
    expect(wrapper.find('.icon').length).toEqual(1)
    expect(wrapper.find('.font').length).toEqual(1)
  })

  test('should render any passed className', () => {
    const wrapper = shallow(<Icon icon="close" className="special classes" />)
    expect(wrapper.find('.icon.special.classes').length).toEqual(1)
  })

  test('should not render class for non-font icons', () => {
    const wrapper = shallow(<Icon icon="close" font={false} />)
    expect(wrapper.find('.icon').length).toEqual(1)
    expect(wrapper.find('.font').length).toEqual(0)
  })

  test('should use icon and default filePath to build svg href', () => {
    const wrapper = shallow(<Icon icon="close" />)
    expect(wrapper.find('use[href="/assets/icons.svg#close"]').length).toEqual(1)
  })

  test('should use icon and explicit filePath to build svg href', () => {
    const wrapper = shallow(<Icon icon="close" filePath="/svg-defs.svg" />)
    expect(wrapper.find('use[href="/svg-defs.svg#close"]').length).toEqual(1)
  })
})
