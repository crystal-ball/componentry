import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Button from './Button'
import elementTests from '../utils-test/element-tests'

describe('<Button/>', () => {
  // Basic library element test suite
  elementTests(Button)

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
      </Button>,
    )
    expect(wrapper.find('span').length).toEqual(1)
  })

  test('simulates click events', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(<Button onClick={onButtonClick} />)
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
    const tree = renderer.create(<Button color="primary">Facebook</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('it renders brand color correctly', () => {
    const tree = renderer.create(<Button color="success">Facebook</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('it renders link style correctly', () => {
    const tree = renderer.create(<Button link>Facebook</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('it renders outline correctly', () => {
    const tree = renderer
      .create(
        <Button color="success" outline>
          Facebook
        </Button>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('it renders large outline correctly', () => {
    const tree = renderer
      .create(
        <Button color="success" size="large" outline>
          Facebook
        </Button>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
