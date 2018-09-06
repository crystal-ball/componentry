import React from 'react'
import { mount, render } from 'enzyme'

import Popover from './Popover'
import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'

describe('<Popover />', () => {
  // Basic library activation test suite
  activationTestSuite(Popover)
  // Basic library element test suite
  elementTests(Popover)
  elementTests(Popover.Trigger)
  elementTests(Popover.Content)
  elementTests(Popover.Header)
  elementTests(Popover.Body)

  it('renders the correct directional classes using direction', () => {
    const wrapper = mount(
      <Popover>
        <Popover.Trigger>Trigger</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>,
    )

    expect(wrapper.find('.popover.right').length).toEqual(1) // default
    wrapper.setProps({ direction: 'top' })
    expect(wrapper.find('.popover.top').length).toEqual(1)
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Popover /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(
      <Popover>
        <Popover.Trigger>Trigger</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>,
    )

    expect(tree).toMatchSnapshot()
  })
})
