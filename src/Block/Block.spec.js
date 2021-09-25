import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../test/element-tests'
import { Block } from './Block'

describe('<Block />', () => {
  elementTests(Block)

  it('When inline is not passed, then block className is rendered', () => {
    render(<Block>Content</Block>)

    expect(screen.getByText('Content')).toHaveClass('🅲-block block')
  })

  it('When inline is passed, then inline-block className is rendered', () => {
    render(<Block inline>Content</Block>)

    expect(screen.getByText('Content')).toHaveClass('🅲-block inline-block')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Block /> snapshots', () => {
  it('renders correctly', () => {
    render(<Block data-testid='block'>Block content</Block>)

    expect(screen.getByTestId('block')).toMatchSnapshot()
  })
})
