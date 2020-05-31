import React from 'react'
import { render } from '@testing-library/react'

import elementTests from '../../test/element-tests'
import Card from './Card'

describe('<Card />', () => {
  // Basic library element test suite
  elementTests(Card)
  elementTests(Card.Header)
  elementTests(Card.Body)
  elementTests(Card.Title)
  elementTests(Card.Footer)

  test('should render a container div with class card by default', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toHaveClass('card')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Card /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          Body
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
