import React from 'react'
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
})

// Snapshots
// ---------------------------------------------------------------------------
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
