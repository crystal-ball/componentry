import React from 'react'
import { render } from '@testing-library/react'

import Tabs from './Tabs'
import elementTests from '../../test/element-tests'

describe('<Tab />', () => {
  elementTests(Tabs)
  elementTests(Tabs.Nav)
  elementTests(Tabs.Trigger)
  elementTests(Tabs.ContentContainer)
  elementTests(Tabs.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Tab /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Tabs defaultActive='one'>
        <Tabs.Nav>
          <Tabs.Trigger activeId='one'>Item 1</Tabs.Trigger>
          <Tabs.Trigger activeId='two'>Tab with long name</Tabs.Trigger>
          <Tabs.Trigger activeId='three'>Item 3</Tabs.Trigger>
          <Tabs.Trigger activeId='four' disabled>
            Disabled
          </Tabs.Trigger>
        </Tabs.Nav>
        <Tabs.ContentContainer>
          <Tabs.Content activeId='one'>Tab 1</Tabs.Content>
          <Tabs.Content activeId='two'>Tab 2</Tabs.Content>
          <Tabs.Content activeId='three'>Tab 3</Tabs.Content>
          <Tabs.Content activeId='four'>This tab has been disabled</Tabs.Content>
        </Tabs.ContentContainer>
      </Tabs>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})