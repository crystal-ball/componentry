import React from 'react'
import renderer from 'react-test-renderer'

import State from './index'
import dt from '../utils-test/dt'

import {
  testAriasWithInternalState,
  testPassedActivateDeactivateProps,
  testPassedActiveProp,
  testUserEventHooks
} from '../utils-test/activation-tests'

// State Component Tests
// ---------------------------------------------------------------------------
const dtContent = dt('state-content')
const dtToggle = dt('state-toggle')

describe('<State />', () => {
  test('should update arias when trigger is activated', () => {
    testAriasWithInternalState(
      <State>
        <State.Trigger />
        <State.Content />
      </State>,
      { dtContent, dtToggle }
    )
  })

  test('should call user event hooks', () => {
    const onActivate = jest.fn()
    const onActivated = jest.fn()
    const onDeactivate = jest.fn()
    const onDeactivated = jest.fn()
    testUserEventHooks(
      <State
        onActivate={onActivate}
        onActivated={onActivated}
        onDeactivate={onDeactivate}
        onDeactivated={onDeactivated}
      >
        <State.Trigger />
        <State.Content />
      </State>,
      { dtToggle },
      { onActivate, onActivated, onDeactivate, onDeactivated }
    )
  })

  test('should use passed active prop instead of internal active', () => {
    testPassedActiveProp(
      <State active>
        <State.Trigger />
        <State.Content />
      </State>,
      { dtContent, dtToggle }
    )
  })

  test('should use passed activate and deactivate functions', () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    testPassedActivateDeactivateProps(
      <State active={false} activate={activate} deactivate={deactivate}>
        <State.Trigger />
        <State.Content />
      </State>,
      { dtContent, dtToggle },
      { activate, deactivate }
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
it('renders correctly', () => {
  const tree = renderer
    .create(
      <State>
        <State.Trigger>Trigger</State.Trigger>
        <State.Content>Content</State.Content>
      </State>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
