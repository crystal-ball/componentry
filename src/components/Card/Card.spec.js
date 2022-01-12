import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../test/element-tests'
import { Card } from './Card'

describe('<Card />', () => {
  // Basic library element test suite
  elementTests(Card)
  elementTests(Card.Header)
  elementTests(Card.Body)
  elementTests(Card.Title)
  elementTests(Card.Footer)

  // ('should render a container div with class card by default', () => {
  //   render(<Card data-testid='card' />)
  //   expect(screen.getByTestId('card')).toHaveClass('')
  // })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Card /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Card data-testid='card'>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          Body
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>,
    )

    expect(screen.getByTestId('card')).toMatchSnapshot()
  })
})
