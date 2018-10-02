import React from 'react'
import { mount, render } from 'enzyme'

import Button from './Button'
import elementTests from '../utils-test/element-tests'

describe('<Button/>', () => {
  // Basic library element test suite
  elementTests(Button)

  test('should render a button element default', () => {
    const wrapper = mount(<Button />)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('.btn').length).toEqual(1)
    expect(wrapper.find('button[type="button"]').length).toEqual(1)
  })

  test('should render any brand classes for prop color', () => {
    const wrapper = mount(<Button color="info" />)
    expect(wrapper.find('.btn.btn-info').length).toEqual(1)
  })

  test('should render outline class for prop outline', () => {
    const wrapper = mount(<Button color="primary" outline />)
    // Should render the color and outline classes
    expect(wrapper.find('.btn.btn-primary.btn-outline').length).toEqual(1)
  })

  test('should render class for small button', () => {
    const wrapper = mount(<Button size="sm" />)
    expect(wrapper.find('.btn.btn-sm').length).toEqual(1)
  })

  test('should render class for large button', () => {
    const wrapper = mount(<Button size="lg" />)
    expect(wrapper.find('.btn.btn-lg').length).toEqual(1)
  })

  test('should not render class btn-anchor without passed prop', () => {
    const wrapper = mount(<Button />)
    expect(wrapper.find('button.btn-anchor').length).toEqual(0)
  })

  test('should render class btn-anchor when passed prop', () => {
    const wrapper = mount(<Button anchor />)
    expect(wrapper.find('button.btn-anchor').length).toEqual(1)
  })

  test('should render a passed type', () => {
    const wrapper = mount(<Button type="reset" />)
    expect(wrapper.find('button[type="reset"]').length).toEqual(1)
  })

  test('should render children', () => {
    const wrapper = mount(
      <Button>
        <span>Rad</span>
      </Button>,
    )
    expect(wrapper.find('span').length).toEqual(1)
  })

  test('simulates click events', () => {
    const onButtonClick = jest.fn()
    const wrapper = mount(<Button onClick={onButtonClick} />)
    wrapper.find('button').simulate('click')
    expect(onButtonClick).toHaveBeenCalled()
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Button /> Snapshots', () => {
  // 📝 TODO: use enzyme tests to validate props effects, use snapshot for testing
  // output of markup like 'type'
  test('it renders defaults correctly', () => {
    const tree = render(<Button>Componentry</Button>)
    expect(tree).toMatchSnapshot()
  })

  test('it renders brand color correctly', () => {
    const tree = render(<Button color="success">Componentry</Button>)
    expect(tree).toMatchSnapshot()
  })

  test('it renders anchor style correctly', () => {
    const tree = render(<Button anchor>Componentry</Button>)
    expect(tree).toMatchSnapshot()
  })

  test('it renders outline correctly', () => {
    const tree = render(
      <Button color="success" outline>
        Componentry
      </Button>,
    )

    expect(tree).toMatchSnapshot()
  })

  test('it renders large outline correctly', () => {
    const tree = render(
      <Button color="success" size="lg" outline>
        Componentry
      </Button>,
    )

    expect(tree).toMatchSnapshot()
  })
})
