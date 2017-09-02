import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Card from './Card'

describe('<Card />', () => {
  it('should render a container div with class card by default', () => {
    const wrapper = mount(<Card />)
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.find('.card')).to.have.length(1)
  })

  it('should render any passed className', () => {
    const wrapper = mount(<Card className="special classes" />)
    expect(wrapper.find('.card.special.classes')).to.have.length(1)
  })

  it('should render any other passed attributes', () => {
    const wrapper = mount(<Card data-test="totally-rad" />)
    expect(wrapper.find('[data-test="totally-rad"]')).to.have.length(1)
  })

  it('should render children', () => {
    const wrapper = mount(
      <Card>
        <span>Rad</span>
      </Card>
    )
    expect(wrapper.find('span')).to.have.length(1)
  })

  // Contextual Components
  // ---------------------------------------------------------------------------
  it('should render contextual components', () => {
    const wrapper = mount(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          Body
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    )

    expect(wrapper.find('.card-header')).to.have.length(1)
    expect(wrapper.find('.card-body')).to.have.length(1)
    expect(wrapper.find('.card-title')).to.have.length(1)
    expect(wrapper.find('.card-footer')).to.have.length(1)
    // Contextual card components are elementFactory components, addl testing
    // found in element-factory.spec.js
  })
})
