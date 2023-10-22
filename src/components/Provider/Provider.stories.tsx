import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button/Button'
import { ComponentryProvider, useTheme } from './Provider'

const meta: Meta<typeof ComponentryProvider> = {
  component: ComponentryProvider,
}

export default meta
type Story = StoryObj<typeof ComponentryProvider>

export const Primary: Story = {
  render: () => (
    <ComponentryProvider
      config={{
        defaultProps: {
          Button: {
            size: 'large',
          },
        },
      }}
    >
      <div>
        <Button>A large successful button!</Button>
        <ProviderConsumer />
      </div>
    </ComponentryProvider>
  ),
}

function ProviderConsumer() {
  const theme = useTheme()

  return (
    <div>
      <h3>Theme values:</h3>
      <pre style={{ width: 600 }}>
        <code>{JSON.stringify(theme, null, 2)}</code>
      </pre>
    </div>
  )
}
