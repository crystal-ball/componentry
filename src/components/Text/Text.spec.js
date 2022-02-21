import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Text, configureTextElementsMap } from './Text'

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Text /> snapshots', () => {
  it('renders correctly', () => {
    render(<Text>Componentry</Text>)

    expect(screen.getByText('Componentry')).toMatchSnapshot()
  })
})

// --------------------------------------------------------
// Configuration

describe('Text', () => {
  it('configureTextElementsMap allows configuring variant render elements', () => {
    configureTextElementsMap({
      rad: 'section',
    })

    render(<Text variant='rad'>Componentry</Text>)

    expect(screen.getByText('Componentry')).toContainHTML(
      '<section class="C9Y-Text-base C9Y-Text-rad">Componentry</section>',
    )
  })
})
