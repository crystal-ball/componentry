import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Block } from './Block'

describe('<Block />', () => {
  elementTests(Block)

  test('When inline is not passed, then d-block className is rendered', () => {
    render(<Block>Content</Block>)
    expect(screen.getByText('Content')).toHaveClass('d-block')
  })

  test('When inline is passed, then d-inline-block className is rendered', () => {
    render(<Block inline>Content</Block>)
    expect(screen.getByText('Content')).toHaveClass('d-inline-block')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Block /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <div>
        <Block>Block content</Block>
        <Block inline>Inline block content</Block>
      </div>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
