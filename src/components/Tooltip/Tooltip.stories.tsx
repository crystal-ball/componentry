import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  render: () => (
    <Tooltip active>
      <Tooltip.Action>Fun fact</Tooltip.Action>
      <Tooltip.Content>
        Only 8% of the world's currency is physical money, the rest only exists on
        computers.
      </Tooltip.Content>
    </Tooltip>
  ),
}
