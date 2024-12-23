import type { Meta, StoryObj } from '@storybook/react'

import { Active } from '../Active/Active'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'
import { Tooltip } from '../Tooltip/Tooltip'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  render: () => (
    <Active>
      <Active.Action>Open</Active.Action>
      <Modal>
        <Modal.Header>
          <Modal.Title>Demo modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Text>
            This is an uncontrolled modal that will automatically manage its active state
            using the parent Active component.
          </Text>
          <Tooltip>
            <Tooltip.Action>Z-Index and Modal stacking</Tooltip.Action>
            <Tooltip.Content>
              You can use tooltips and dropdowns in Modals and they will be placed in the
              modal&apos;s stacking context, overlaying elements as you&apos;d expect.
            </Tooltip.Content>
          </Tooltip>
        </Modal.Body>
        <Modal.Footer gap={2}>
          <Button as={Active.Action}>Close</Button>
          <Button color='primary'>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Active>
  ),
}
