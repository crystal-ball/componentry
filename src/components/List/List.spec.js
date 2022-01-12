import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../test/element-tests'
import { List } from './List'

describe('<List />', () => {
  // Basic library element test suite
  elementTests(List)
  elementTests(List.Item)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<List /> snapshots', () => {
  it('renders ul list correctly', () => {
    render(
      <List data-testid='list'>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>,
    )

    expect(screen.getByTestId('list')).toMatchSnapshot()
  })

  it('renders anchor list correctly', () => {
    render(
      <List data-testid='list'>
        <List.Item href='#'>Item 1</List.Item>
        <List.Item href='#'>Item 2</List.Item>
      </List>,
    )

    expect(screen.getByTestId('list')).toMatchSnapshot()
  })

  it('renders button list correctly', () => {
    render(
      <List data-testid='list'>
        <List.Item onClick={() => {}}>Item 1</List.Item>
        <List.Item onClick={() => {}}>Item 2</List.Item>
      </List>,
    )

    expect(screen.getByTestId('list')).toMatchSnapshot()
  })
})
