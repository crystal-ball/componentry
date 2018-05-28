import React from 'react'
import { shallow, render } from 'enzyme'

import Icon from './Icon'

describe('<Icon />', () => {
  test('should not include class font when false', () => {
    const wrapper = shallow(<Icon id="test" font={false} />)
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
