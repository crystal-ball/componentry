import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { elementTests } from '../../test/element-tests'
import { ComponentryProvider } from '../Provider/Provider'
import { Text } from './Text'

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)

  it('allows configuring variant render elements with ComponentryProvider', () => {
    render(
      <ComponentryProvider
        config={{
          defaultProps: {
            Text: {
              textElementMap: {
                rad: 'section',
              },
            },
          },
        }}
      >
        <Text variant='rad'>Componentry</Text>
      </ComponentryProvider>,
    )

    expect(screen.getByText('Componentry')).toContainHTML(
      '<section class="C9Y-Text-base C9Y-Text-rad">Componentry</section>',
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Text /> snapshots', () => {
  it('renders correctly', () => {
    render(<Text>Componentry</Text>)

    expect(screen.getByText('Componentry')).toMatchSnapshot()
  })
})
