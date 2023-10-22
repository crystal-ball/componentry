import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Primary: Story = {
  render: () => (
    <Popover active direction='bottom'>
      <Popover.Action>Toggle</Popover.Action>
      <Popover.Content>
        <Popover.Heading>Fun Fact!</Popover.Heading>
        <Popover.Body>
          The new Texas Instrument calculators have ABC keyboards because if they had
          QWERTY keyboards, they would be considered computers and wouldn’t be allowed for
          standardized test taking.
        </Popover.Body>
      </Popover.Content>
    </Popover>
  ),
}
