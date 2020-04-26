import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'
import elementTests from '../../test/element-tests'

describe('<Button/>', () => {
  // Basic library element test suite
  elementTests(Button)

  // 3. Test default as is 'button'
  // 4. Test passing block provides $variant-block
  // 5. Test passing color provides $variant-color
  // 6. Test passing outline provides $variant-outline-$outline
  // 7. Test passing size provides $variant-size
  // 8. Test passing disabled

  test('When no props are passed, then defaults should be rendered', () => {
    const { container, getByText } = render(<Button>Button</Button>)

    // By default the button should have type button for a11y
    expect(container).toContainElement(document.querySelector('button[type="button"]'))
    // By default the variant btn should be included and not anchor
    expect(getByText('Button')).toHaveClass('btn')
    // TODO: Is it possible to get the classes from the element and just check that?
    // ...there shouldn't be any other classes
  })

  test('When `type` is passed, then it override the default', () => {
    const { container } = render(<Button type='reset'>Button</Button>)
    expect(container).toContainElement(document.querySelector('button[type="reset"]'))
  })

  test('When `variant` is passed, then it should be used as base className value', () => {
    const { getByText } = render(<Button variant='demo'>Button</Button>)
    expect(getByText('Button')).toHaveClass('btn btn-demo')
  })

  test('When `color` is passed, then the color className should render', () => {
    const { getByText } = render(
      <>
        <Button color='info'>Button</Button>
        <Button variant='demo' color='info'>
          Variant Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-color-info')
    expect(getByText('Variant Button')).toHaveClass('btn btn-demo btn-color-info')
  })

  test('When `size` is passed, then the size className should render', () => {
    const { getByText } = render(
      <>
        <Button size='sm'>Button</Button>
        <Button variant='demo' size='sm'>
          Variant Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-sm')
    expect(getByText('Variant Button')).toHaveClass('btn btn-demo btn-sm')
  })

  test('When used to create an anchor styled button, then anchor styles should be rendered', () => {
    const { getByText } = render(<Button baseClass='a'>Button</Button>)
    expect(getByText('Button')).toHaveClass('a')
    expect(getByText('Button')).not.toHaveClass('btn')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Button /> Snapshots', () => {
  test('it renders defaults correctly', () => {
    const { container } = render(<Button>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it renders brand color correctly', () => {
    const { container } = render(<Button color='success'>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it renders anchor variants correctly', () => {
    const { container } = render(<Button variant='a'>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it renders large outline correctly', () => {
    const { container } = render(<Button size='lg'>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
