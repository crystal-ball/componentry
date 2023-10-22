import type { Meta, StoryObj } from '@storybook/react'

import { Grid } from './Grid'

const meta: Meta<typeof Grid> = {
  component: Grid,
}

export default meta
type Story = StoryObj<typeof Grid>

export const Primary: Story = {
  args: {
    backgroundColor: 'primary-200',
    className: 'rounded grid-cols-2',
    gap: 4,
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
