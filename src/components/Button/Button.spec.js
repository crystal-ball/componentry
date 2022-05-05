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
    render(<Button type='submit'>Button</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('When `variant` is passed, then it should be used as base className value', () => {
    render(<Button variant='outlined'>Button</Button>)

    expect(screen.getByRole('button')).toHaveClass('C9Y-Button-base C9Y-Button-outlined')
  })

  it('When `color` is passed, then the color className should render', () => {
    render(
      <>
        <Button color='primary'>Button</Button>
        <Button variant='outlined' color='primary'>
          Outlined Button
        </Button>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-filled C9Y-Button-primaryColor',
    )
    expect(screen.getByRole('button', { name: 'Outlined Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-outlined C9Y-Button-primaryColor',
    )
  })

  it('When `size` is passed, then the size className should render', () => {
    render(
      <>
        <Button size='small'>Button</Button>
        <Button variant='outlined' size='small'>
          Outlined Button
        </Button>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-filled C9Y-Button-smallSize',
    )
    expect(screen.getByRole('button', { name: 'Outlined Button' })).toHaveClass(
      'C9Y-Button-base C9Y-Button-outlined C9Y-Button-smallSize',
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
})
