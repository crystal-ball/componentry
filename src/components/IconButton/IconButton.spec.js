import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Icon } from '../Icon/Icon'
import { IconButton } from './IconButton'

describe('<IconButton/>', () => {
  // Basic library element test suite
  elementTests(IconButton)

  // --- RENDER
  it('Renders React element values', () => {
    render(
      <IconButton
        icon={<Icon id='code' data-special='very' data-testid='custom-element' />}
      />,
    )

    expect(screen.getByTestId('custom-element').dataset.special).toBe('very')
  })

  it('Renders Icon components for string values', () => {
    render(<IconButton icon='code' />)

    expect(screen.getByLabelText('code')).toHaveClass(
      'C9Y-Icon-base C9Y-Icon-font icon-code',
    )
  })

  // --- BUTTON ATTRS
  it('When no props are passed, then defaults should be rendered', () => {
    render(<IconButton icon='code' />)

    // By default the button should have type button for a11y
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    // By default the variant filled
    expect(screen.getByRole('button')).toHaveClass(
      'C9Y-IconButton-base C9Y-IconButton-filled',
    )
  })

  it('When `type` is passed, then it overrides the default', () => {
    render(<IconButton icon='code' type='submit' />)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('When `variant` is passed, then it should be used as base className value', () => {
    render(<IconButton variant='outlined' icon='code' />)

    expect(screen.getByRole('button')).toHaveClass(
      'C9Y-IconButton-base C9Y-IconButton-outlined',
    )
  })

  it('When `color` is passed, then the color className should render', () => {
    render(<IconButton icon='code' color='primary' />)

    expect(screen.getByRole('button')).toHaveClass(
      'C9Y-IconButton-base  C9Y-IconButton-filled C9Y-IconButton-primaryColor',
    )
  })

  it('When `size` is passed, then the size className should render', () => {
    render(<IconButton icon='code' size='small' />)

    expect(screen.getByRole('button')).toHaveClass(
      'C9Y-IconButton-base C9Y-IconButton-smallSize',
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<IconButton /> Snapshots', () => {
  it('renders defaults correctly', () => {
    render(<IconButton icon='code' />)

    expect(screen.getByRole('button')).toMatchSnapshot()
  })
})