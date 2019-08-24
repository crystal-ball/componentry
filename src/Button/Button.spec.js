import React from 'react'
import { cleanup, render } from '@testing-library/react'

import Button from './Button'
// import elementTests from '../utils-test/element-tests'

describe('<Button/>', () => {
  // Basic library element test suite
  // elementTests(Button)

  afterEach(cleanup)

  // 3. Test default as is 'button'
  // 4. Test passing block provides $flavor-block
  // 5. Test passing color provides $flavor-color
  // 6. Test passing outline provides $flavor-outline-$outline
  // 7. Test passing size provides $flavor-size
  // 8. Test passing disabled

  test('When no props are passed, then defaults should be rendered', () => {
    const { container, getByText } = render(<Button>Button</Button>)

    // By default the button should have type button for a11y
    expect(container).toContainElement(document.querySelector('button[type="button"]'))
    // By default the flavor btn should be included and not btn-anchor
    expect(getByText('Button')).toHaveClass('btn')
    // TODO: Is it possible to get the classes from the element and just check that?
    // ...there shouldn't be any other classes
  })

  test('When `type` is passed, then it override the default', () => {
    const { container } = render(<Button type='reset'>Button</Button>)
    expect(container).toContainElement(document.querySelector('button[type="reset"]'))
  })

  test('When `flavor` is passed, then it should be used as base className value', () => {
    const { getByText } = render(<Button flavor='btn-test'>Button</Button>)
    expect(getByText('Button')).toHaveClass('btn-test')
    // TODO: assert only classname
  })

  test('When `block` is passed, then the block className should render', () => {
    const { getByText } = render(
      <>
        <Button block>Button</Button>
        <Button flavor='btn-test' block>
          Flavor Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-block')
    expect(getByText('Flavor Button')).toHaveClass('btn-test btn-test-block')
  })

  test('When `color` is passed, then the color className should render', () => {
    const { getByText } = render(
      <>
        <Button color='info'>Button</Button>
        <Button flavor='btn-test' color='info'>
          Flavor Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-info')
    expect(getByText('Flavor Button')).toHaveClass('btn-test btn-test-info')
  })

  test('When `outline` is passed, then the outline className should render', () => {
    const { getByText } = render(
      <>
        <Button outline='info'>Button</Button>
        <Button flavor='btn-test' outline='info'>
          Flavor Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-info-outline')
    expect(getByText('Flavor Button')).toHaveClass('btn-test btn-test-info-outline')
  })

  test('When `size` is passed, then the size className should render', () => {
    const { getByText } = render(
      <>
        <Button size='sm'>Button</Button>
        <Button flavor='btn-test' size='sm'>
          Flavor Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn btn-sm')
    expect(getByText('Flavor Button')).toHaveClass('btn-test btn-test-sm')
  })

  test('When `anchor` is passed, then it should be mapped to btn-anchor flavor', () => {
    const { getByText } = render(
      <>
        <Button anchor>Button</Button>
        <Button anchor color='info'>
          Info Button
        </Button>
        <Button anchor outline='info'>
          Outline Info Button
        </Button>
        <Button anchor size='sm'>
          Small Button
        </Button>
      </>,
    )
    expect(getByText('Button')).toHaveClass('btn-anchor')
    expect(getByText('Info Button')).toHaveClass('btn-anchor btn-anchor-info')
    expect(getByText('Outline Info Button')).toHaveClass(
      'btn-anchor btn-anchor-outline-info',
    )
    expect(getByText('Small Button')).toHaveClass('btn-anchor btn-anchor-outline-info')
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
    const { container } = render(<Button anchor>Componentry</Button>)
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
