import type { Meta, StoryObj } from '@storybook/react'

import { Active } from '../Active/Active'
import { Link } from '../Link/Link'
import { Text } from '../Text/Text'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'Alerts can contain any HTML elements, and can be dismissible or static. A dismissible Alert requires Componentry Active `active` and `deactivate` props, which can be passed directly or the Alert can be nested inside of an Active component to automatically create an uncontrolled Alert.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Primary: Story = {
  args: {
    color: 'primary',
    children: (
      <>
        <Text variant='h3' className='C9Y-AlertHeading'>
          Well done!
        </Text>
        <Text>You successfully read this important alert message.</Text>
        <hr className='my-2' />
        <Link href='#demo' className='C9Y-AlertLink'>
          Go home
        </Link>
      </>
    ),
  },
}

export const Dismissible: Story = {
  render: () => (
    <Active defaultActive>
      <Alert color='primary' dismissible>
        <Text variant='h3' className='C9Y-AlertHeading'>
          Success!
        </Text>
        <Text>You created a dismissible alert.</Text>
      </Alert>
    </Active>
  ),
}
