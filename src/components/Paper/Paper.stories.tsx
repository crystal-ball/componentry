import type { Meta, StoryObj } from '@storybook/react'

import { Paper } from './Paper'

const meta: Meta<typeof Paper> = {
  component: Paper,
}

export default meta
type Story = StoryObj<typeof Paper>

export const Primary: Story = {
  args: {
    p: 2,
    children: 'Hello World',
  },
}
