import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from './Flex'

const meta: Meta<typeof Flex> = {
  component: Flex,
}

export default meta
type Story = StoryObj<typeof Flex>

export const Primary: Story = {
  args: {
    backgroundColor: 'primary-200',
    className: 'rounded',
    children: [1, 2, 3].map((num) => (
      <div
        key={num}
        className='bg-primary-600 text-inverse font-mono font-bold px-6 py-4 rounded'
      >
        #{num > 9 ? num : `0${num}`}
      </div>
    )),
  },
}
