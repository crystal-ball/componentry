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
    const { getByText } = render(<Button variant='btn-test'>Button</Button>)
    expect(getByText('Button')).toHaveClass('btn-test')
    // TODO: assert only classname
  })

  test('When `block` is passed, then the block className should render', () => {
    const { getByText } = render(
      <>
        <Button block>Button</Button>
        <Button variant='btn-test' block>
          Variant Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-block')
    expect(getByText('Variant Button')).toHaveClass('btn-test btn-test-block')
  })

  test('When `color` is passed, then the color className should render', () => {
    const { getByText } = render(
      <>
        <Button color='info'>Button</Button>
        <Button variant='btn-test' color='info'>
          Variant Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-info')
    expect(getByText('Variant Button')).toHaveClass('btn-test btn-test-info')
  })

  test('When `outline` is passed, then the outline className should render', () => {
    const { getByText } = render(
      <>
        <Button outline='info'>Button</Button>
        <Button variant='btn-test' outline='info'>
          Variant Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-outline-info')
    expect(getByText('Variant Button')).toHaveClass('btn-test btn-test-outline-info')
  })

  test('When `size` is passed, then the size className should render', () => {
    const { getByText } = render(
      <>
        <Button size='sm'>Button</Button>
        <Button variant='btn-test' size='sm'>
          Variant Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-sm')
    expect(getByText('Variant Button')).toHaveClass('btn-test btn-test-sm')
  })

  test('When used to create a button styled anchor, then btn styles should be rendered', () => {
    const { getByText } = render(
      <>
        <Button as='a'>Button</Button>
        <Button as='a' color='info'>
          Info Button
        </Button>
        <Button as='a' outline='info'>
          Outline Info Button
        </Button>
        <Button as='a' size='sm'>
          Small Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn')
    expect(getByText('Info Button')).toHaveClass('btn btn-info')
    expect(getByText('Outline Info Button')).toHaveClass('btn btn-outline-info')
    expect(getByText('Small Button')).toHaveClass('btn btn-sm')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Button /> Snapshots', () => {
  // 📝 TODO: use enzyme tests to validate props effects, use snapshot for testing
  // output of markup like 'type'
  test('it renders defaults correctly', () => {
    const { container } = render(<Button>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it renders brand color correctly', () => {
    const { container } = render(<Button color='success'>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it renders anchor style correctly', () => {
    const { container } = render(<Button as='a'>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it renders outline correctly', () => {
    const { container } = render(<Button outline='success'>Componentry</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it renders large outline correctly', () => {
    const { container } = render(
      <Button outline='success' size='lg'>
        Componentry
      </Button>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
