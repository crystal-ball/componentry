import React from 'react'
import { mount, render } from 'enzyme'

import elementTests from '../utils-test/element-tests'
import Icon from './Icon'

describe('<Icon />', () => {
  elementTests(Icon)
  test('should not include class font when false', () => {
    const wrapper = mount(<Icon id="test" font={false} />)
    expect(wrapper.find('.font').length).toEqual(0)
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Icon /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(<Icon id="test" />)
    expect(tree).toMatchSnapshot()
  })
})
