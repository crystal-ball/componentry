import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import pureElementFactory from './pure-element-factory';

describe('pure-element-factory', () => {
  it('should return a component of: div with children', () => {
    const Test = pureElementFactory();
    const wrapper = shallow(<Test>Children</Test>);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.contains('Children'));
  });

  it('should accept a className', () => {
    const Test = pureElementFactory({ className: 'test class' });
    const wrapper = shallow(<Test>Children</Test>);
    expect(wrapper.find('div.test.class')).to.have.length(1);
  });

  it('should accept an As', () => {
    const Test = pureElementFactory({ As: 'h4' });
    const wrapper = shallow(<Test>Children</Test>);
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('should prioritize and combine component invocation params', () => {
    const Test = pureElementFactory({ As: 'h4', className: 'factory' });
    const wrapper = shallow(<Test As='span' className='invocation'>Children</Test>);
    expect(wrapper.find('span.factory.invocation')).to.have.length(1);
  });
});
