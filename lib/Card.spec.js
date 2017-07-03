import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Card from './Card';

describe('<Card />', () => {
  it('should render a container div with class card by default', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('.card')).to.have.length(1);
  });

  it('should render any passed className', () => {
    const wrapper = shallow(<Card className='special classes' />);
    expect(wrapper.find('.card.special.classes')).to.have.length(1);
  });

  it('should render any other passed attributes', () => {
    const wrapper = shallow(<Card data-test='totally-rad' />);
    expect(wrapper.find('[data-test="totally-rad"]')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Card><span>Rad</span></Card>);
    expect(wrapper.find('span')).to.have.length(1);
  });

  // Contextual Components
  // ---------------------------------------------------------------------------
  it('should render contextual components', () => {
    const wrapper = mount(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Block>
          <Card.Title>Title</Card.Title>
          Body
        </Card.Block>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(wrapper.find('.card-header')).to.have.length(1);
    expect(wrapper.find('.card-block')).to.have.length(1);
    expect(wrapper.find('.card-title')).to.have.length(1);
    expect(wrapper.find('.card-footer')).to.have.length(1);
    // Contextual card components are pureElementFactory() components, addl testing
    // found in pure-element-factory.spec.js
  });
});
