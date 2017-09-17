import React from 'react'
import { mount, shallow } from 'enzyme'

import Card from './index'

describe('<Card />', () => {
  test('should render a container div with class card by default', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('.card').length).toEqual(1)
  })

  test('should render any passed className', () => {
    const wrapper = shallow(<Card className="special classes" />)
    expect(wrapper.find('.card.special.classes').length).toEqual(1)
  })

  test('should render any other passed attributes', () => {
    const wrapper = shallow(<Card data-test="totally-rad" />)
    expect(wrapper.find('[data-test="totally-rad"]').length).toEqual(1)
  })

  test('should render children', () => {
    const wrapper = shallow(
      <Card>
        <span>Rad</span>
      </Card>
    )
    expect(wrapper.find('span').length).toEqual(1)
  })

  // Contextual Components
  // ---------------------------------------------------------------------------
  test('should render contextual components', () => {
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

    expect(wrapper.find('.card-header').length).toEqual(1)
    expect(wrapper.find('.card-body').length).toEqual(1)
    expect(wrapper.find('.card-title').length).toEqual(1)
    expect(wrapper.find('.card-footer').length).toEqual(1)
    // Contextual card components are elementFactory components, addl testing
    // found in element-factory.spec.js
  })
})
