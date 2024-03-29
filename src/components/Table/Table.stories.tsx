import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './Table'

const meta: Meta<typeof Table> = {
  component: Table,
}

export default meta
type Story = StoryObj<typeof Table>

export const Primary: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row className='special-row'>
          <Table.Header>Library</Table.Header>
          <Table.Header>Package</Table.Header>
          <Table.Header>Version</Table.Header>
          <Table.Header>Size</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row className='special-row'>
          <Table.Cell>Material UI</Table.Cell>
          <Table.Cell>
            <code>@material-ui/core</code>
          </Table.Cell>
          <Table.Cell>4.4.2</Table.Cell>
          <Table.Cell>84.7kb</Table.Cell>
        </Table.Row>
        <Table.Row className='special-row'>
          <Table.Cell>Ant Design</Table.Cell>
          <Table.Cell>
            <code>antd</code>
          </Table.Cell>
          <Table.Cell>3.23.3</Table.Cell>
          <Table.Cell>583.8kb</Table.Cell>
        </Table.Row>
        <Table.Row className='special-row'>
          <Table.Cell>Semantic UI</Table.Cell>
          <Table.Cell>
            <code>semantic-ui-react</code>
          </Table.Cell>
          <Table.Cell>0.88.1</Table.Cell>
          <Table.Cell>83kb</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}
