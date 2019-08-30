import React from 'react'
import { render } from '@testing-library/react'

import ListGroup from './ListGroup'
import elementTests from '../../test/element-tests'

describe('<ListGroup />', () => {
  // Basic library element test suite
  elementTests(ListGroup)
  elementTests(ListGroup.Item)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<List /> snapshots', () => {
  test('renders ul list correctly', () => {
    const { container } = render(
      <ListGroup>
        <ListGroup.Item>Item 1</ListGroup.Item>
        <ListGroup.Item>Item 2</ListGroup.Item>
      </ListGroup>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders anchor list correctly', () => {
    const { container } = render(
      <ListGroup>
        <ListGroup.Item href='#'>Item 1</ListGroup.Item>
        <ListGroup.Item href='#'>Item 2</ListGroup.Item>
      </ListGroup>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders button list correctly', () => {
    const { container } = render(
      <ListGroup>
        <ListGroup.Item onClick={() => {}}>Item 1</ListGroup.Item>
        <ListGroup.Item onClick={() => {}}>Item 2</ListGroup.Item>
      </ListGroup>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
