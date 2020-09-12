import React from 'react'
import { render } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { List } from './List'

describe('<List />', () => {
  // Basic library element test suite
  elementTests(List)
  elementTests(List.Item)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<List /> snapshots', () => {
  test('renders ul list correctly', () => {
    const { container } = render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders anchor list correctly', () => {
    const { container } = render(
      <List>
        <List.Item href='#'>Item 1</List.Item>
        <List.Item href='#'>Item 2</List.Item>
      </List>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders button list correctly', () => {
    const { container } = render(
      <List>
        <List.Item onClick={() => {}}>Item 1</List.Item>
        <List.Item onClick={() => {}}>Item 2</List.Item>
      </List>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
