import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Tabs } from './Tabs'

describe('<Tab />', () => {
  elementTests(Tabs)
  elementTests(Tabs.ActionsContainer)
  elementTests(Tabs.Action)
  elementTests(Tabs.ContentContainer)
  elementTests(Tabs.Content, { mounted: 'always' })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Tab /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Tabs defaultActive='one' data-testid='tabs'>
        <Tabs.ActionsContainer>
          <Tabs.Action activeId='one'>Item 1</Tabs.Action>
          <Tabs.Action activeId='two'>Tab with long name</Tabs.Action>
          <Tabs.Action activeId='three'>Item 3</Tabs.Action>
          <Tabs.Action activeId='four' disabled>
            Disabled
          </Tabs.Action>
        </Tabs.ActionsContainer>
        <Tabs.ContentContainer>
          <Tabs.Content activeId='one' mounted='always'>
            Tab 1
          </Tabs.Content>
          <Tabs.Content activeId='two' mounted='always'>
            Tab 2
          </Tabs.Content>
          <Tabs.Content activeId='three' mounted='always'>
            Tab 3
          </Tabs.Content>
          <Tabs.Content activeId='four' mounted='always'>
            This tab has been disabled
          </Tabs.Content>
        </Tabs.ContentContainer>
      </Tabs>,
    )

    expect(screen.getByTestId('tabs')).toMatchSnapshot()
  })
})
