import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Icon } from './Icon';

describe('<Icon/>', function () {
  it('should render an SVG element by default', function () {
    const wrapper = shallow(<Icon icon='close' />);
    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('.icon')).to.have.length(1);
  });

  it('should render any passed className', function () {
    const wrapper = shallow(<Icon icon='close' className='special classes' />);
    expect(wrapper.find('.icon.special.classes')).to.have.length(1);
  });

  it('should render class for non-font icons', function() {
    const wrapper = shallow(<Icon icon='close' font={false} />);
    expect(wrapper.find('.icon.b0')).to.have.length(1);
  });

  it('should use icon and default filePath to build svg href', function() {
    const wrapper = shallow(<Icon icon='close' />);
    expect(wrapper.find('use[href="/assets/svg-defs.svg#close"]')).to.have.length(1);
  });

  it('should use icon and explicit filePath to build svg href', function() {
    const wrapper = shallow(<Icon icon='close' filePath='/svg-defs.svg' />);
    expect(wrapper.find('use[href="/svg-defs.svg#close"]')).to.have.length(1);
  });
});
