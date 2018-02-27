import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Popover from './Popover'
// import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'
import setupActiveContext from '../utils-test/setup-active-context'

describe('<Popover />', () => {
  // Basic library activation test suite
  // TODO: Fix me
  // activationTestSuite(Popover)
  // Basic library element test suite
  elementTests(Popover)
  elementTests(Popover.Trigger, setupActiveContext())
  elementTests(Popover.Content, setupActiveContext())
  elementTests(Popover.Header)
  elementTests(Popover.Body)

  it('renders the correct directional classes using direction', () => {
    const wrapper = shallow(
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
describe('<Drawer /> snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Popover>
          <Popover.Trigger>Trigger</Popover.Trigger>
          <Popover.Content>Content</Popover.Content>
        </Popover>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
