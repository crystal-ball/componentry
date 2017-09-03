import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Icon from './Icon'

describe('<Icon/>', () => {
  it('should render an SVG element with class font by default', () => {
    const wrapper = shallow(<Icon icon="close" />)
    expect(wrapper.find('svg')).to.have.length(1)
    expect(wrapper.find('.icon')).to.have.length(1)
    expect(wrapper.find('.font')).to.have.length(1)
  })

  it('should render any passed className', () => {
    const wrapper = shallow(<Icon icon="close" className="special classes" />)
    expect(wrapper.find('.icon.special.classes')).to.have.length(1)
  })

  it('should not render class for non-font icons', () => {
    const wrapper = shallow(<Icon icon="close" font={false} />)
    expect(wrapper.find('.icon')).to.have.length(1)
    expect(wrapper.find('.font')).to.have.length(0)
  })

  it('should use icon and default filePath to build svg href', () => {
    const wrapper = shallow(<Icon icon="close" />)
    expect(wrapper.find('use[href="/assets/icons.svg#close"]')).to.have.length(1)
  })

  it('should use icon and explicit filePath to build svg href', () => {
    const wrapper = shallow(<Icon icon="close" filePath="/svg-defs.svg" />)
    expect(wrapper.find('use[href="/svg-defs.svg#close"]')).to.have.length(1)
  })
})
