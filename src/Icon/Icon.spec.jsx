import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

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
    const tree = renderer.create(<Icon id="test" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
