import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Button } from './Button'

describe('<Button/>', () => {
  // Basic library element test suite
  elementTests(Button)

  // 3. Test default as is 'button'
  // 4. Test passing block provides $variant-block
  // 5. Test passing color provides $variant-color
  // 6. Test passing outline provides $variant-outline-$outline
  // 7. Test passing size provides $variant-size
  // 8. Test passing disabled

  it('When no props are passed, then defaults should be rendered', () => {
    render(<Button>Button</Button>)

    // By default the button should have type button for a11y
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    // By default the variant primary
    expect(screen.getByRole('button')).toHaveClass('C9Y-Button-base C9Y-Button-filled')
    // TODO: Is it possible to get the classes from the element and just check that?
    // ...there shouldn't be any other classes
  })

  it('When `type` is passed, then it overrides the default', () => {
    render(<Button type='reset'>Button</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset')
  })

  it('When `variant` is passed, then it should be used as base className value', () => {
    render(<Button variant='demo'>Button</Button>)

    expect(screen.getByRole('button')).toHaveClass('C9Y-Button-base C9Y-Button-demo')
  })

  it('When `color` is passed, then the color className should render', () => {
    render(
      <>
        <Button color='info'>Button</Button>
        <Button variant='demo' color='info'>
          Variant Button
        </Button>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-filled C9Y-Button-infoColor',
    )
    expect(screen.getByRole('button', { name: 'Variant Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-demo C9Y-Button-infoColor',
    )
  })

  it('When `size` is passed, then the size className should render', () => {
    render(
      <>
        <Button size='sm'>Button</Button>
        <Button variant='demo' size='sm'>
          Variant Button
        </Button>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-filled C9Y-Button-smSize',
    )
    expect(screen.getByRole('button', { name: 'Variant Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-demo C9Y-Button-smSize',
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Button /> Snapshots', () => {
  it('renders defaults correctly', () => {
    render(<Button>Componentry</Button>)

    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  it('renders brand color correctly', () => {
    render(<Button color='success'>Componentry</Button>)

    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  it('renders large outline correctly', () => {
    render(<Button size='lg'>Componentry</Button>)

    expect(screen.getByRole('button')).toMatchSnapshot()
  })
})
