import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  render: () => (
    <Tabs defaultActive='one' className='w-100'>
      <Tabs.ActionsContainer>
        <Tabs.Action activeId='one'>Item 1</Tabs.Action>
        <Tabs.Action activeId='two'>Tab with long name</Tabs.Action>
        <Tabs.Action activeId='three'>Item 3</Tabs.Action>
        <Tabs.Action activeId='four' disabled>
          Disabled
        </Tabs.Action>
      </Tabs.ActionsContainer>
      <Tabs.ContentContainer>
        <Tabs.Content activeId='one'>Tab 1</Tabs.Content>
        <Tabs.Content activeId='two'>Tab 2</Tabs.Content>
        <Tabs.Content activeId='three'>Tab 3</Tabs.Content>
        <Tabs.Content activeId='four'>This tab has been disabled</Tabs.Content>
      </Tabs.ContentContainer>
    </Tabs>
  ),
}
