import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    children: 'Badge',
  },
}

export const Sizes: Story = {
  render: () => (
    <>
      <Badge size='small'>Badge</Badge>
      <Badge>Badge</Badge>
      <Badge size='large'>Badge</Badge>
    </>
  ),
}
