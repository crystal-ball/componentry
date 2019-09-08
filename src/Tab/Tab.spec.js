import React from 'react'
import { render } from '@testing-library/react'

import Tab from './Tab'
import elementTests from '../../test/element-tests'

describe('<Tab />', () => {
  elementTests(Tab)
  elementTests(Tab.Nav)
  elementTests(Tab.Trigger)
  elementTests(Tab.ContentContainer)
  elementTests(Tab.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Tab /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Tab defaultActive='one'>
        <Tab.Nav>
          <Tab.Trigger activeId='one'>Item 1</Tab.Trigger>
          <Tab.Trigger activeId='two'>Tab with long name</Tab.Trigger>
          <Tab.Trigger activeId='three'>Item 3</Tab.Trigger>
          <Tab.Trigger activeId='four' disabled>
            Disabled
          </Tab.Trigger>
        </Tab.Nav>
        <Tab.ContentContainer>
          <Tab.Content activeId='one'>Tab 1</Tab.Content>
          <Tab.Content activeId='two'>Tab 2</Tab.Content>
          <Tab.Content activeId='three'>Tab 3</Tab.Content>
          <Tab.Content activeId='four'>This tab has been disabled</Tab.Content>
        </Tab.ContentContainer>
      </Tab>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
