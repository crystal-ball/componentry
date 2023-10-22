import type { Meta, StoryObj } from '@storybook/react'

import { Active } from './Active'

const meta: Meta<typeof Active> = {
  component: Active,
}

export default meta
type Story = StoryObj<typeof Active>

export const Primary: Story = {
  args: {
    onActivate: console.log,
    onActivated: console.log,
    onDeactivate: console.log,
    onDeactivated: console.log,
    children: [
      <Active.Action key='action'>Toggle</Active.Action>,
      <Active.Content key='content'>Active component content</Active.Content>,
    ],
  },
}
