import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton/IconButton'
import { Table } from './Table'

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    'Table.ActionCell': Table.ActionCell,
    'Table.Body': Table.Body,
    'Table.Cell': Table.Cell,
    'Table.Head': Table.Head,
    'Table.Header': Table.Header,
    'Table.Row': Table.Row,
    'Table.RowLink': Table.RowLink,
  },
  decorators: [(Story) => <div style={{ width: '100%', height: 250 }}>{Story()}</div>],
} as ComponentMeta<typeof Table>

const componentsData = [
  { name: 'Block', size: 3100, precompile: true, route: 'block' },
  { name: 'Button', size: 3400, precompile: false, route: 'button' },
  {
    name: 'ComponentryProvider',
    size: 2700,
    precompile: false,
    route: 'componentry-provider',
  },
  { name: 'Flex', size: 3100, precompile: true, route: 'flex' },
  { name: 'Grid', size: 3100, precompile: true, route: 'grid' },
  { name: 'Icon', size: 3200, precompile: false, route: 'icon' },
  { name: 'IconButton', size: 3400, precompile: false, route: 'icon-button' },
  { name: 'Link', size: 3100, precompile: false, route: 'link' },
  { name: 'Paper', size: 3100, precompile: true, route: 'paper' },
  { name: 'Text', size: 3200, precompile: true, route: 'text' },
]

export const TableStory: ComponentStory<typeof Table> = () => {
  const [rows, setRows] = useState(componentsData)
  const [sort, setSort] = useState('name')
  const [dir, setDir] = useState('asc')
  return (
    <Table>
      <Table.Head>
        <Table.Row
          style={{ gridTemplateColumns: '24px repeat(3, minmax(50px, 1fr)) 32px' }}
        >
          <Table.Header>
            <input type='checkbox' />
          </Table.Header>
          <Table.Header
            onClick={() => {
              const newRows = componentsData.sort((a, b) => a.name.localeCompare(b.name))
              if (sort !== 'name') {
                setSort('name')
                setDir('asc')
              } else {
                setDir(dir === 'asc' ? 'desc' : 'asc')
              }
              setRows([...newRows])
            }}
          >
            Component
            <Table.SortIcon sortOrder={dir} />
          </Table.Header>
          <Table.Header
            onClick={() => {
              const newRows = componentsData.sort((a, b) => a.size - b.size)
              if (sort !== 'size') {
                setSort('size')
                setDir('asc')
              } else {
                setDir(dir === 'asc' ? 'desc' : 'asc')
              }
              setRows([...newRows])
            }}
          >
            Size
            <Table.SortIcon sortOrder={dir} />
          </Table.Header>
          <Table.Header>Precompile</Table.Header>
          <Table.Header />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((component) => (
          <Table.Row
            key={component.name}
            style={{ gridTemplateColumns: '24px repeat(3, minmax(50px, 1fr)) 32px' }}
          >
            <Table.RowLink
              aria-label={`${component.name} docs`}
              href={`https://componentry.design/docs/components/${component.route}`}
            />
            <Table.ActionCell>
              <input type='checkbox' onClick={console.log} />
            </Table.ActionCell>
            <Table.Cell>{component.name}</Table.Cell>
            <Table.Cell>
              <code>{component.size}</code>
            </Table.Cell>
            <Table.Cell>
              <code>{String(component.precompile)}</code>
            </Table.Cell>
            <Table.ActionCell>
              <IconButton
                variant='outlined'
                icon={<Icon id='code' />}
                onClick={console.log}
              />
            </Table.ActionCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
TableStory.storyName = 'Table'

// grid-template-columns: 24px repeat(3, minmax(50px, 1fr)) 32px
