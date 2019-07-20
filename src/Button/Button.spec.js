import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'

import Button from './Button'
// import elementTests from '../utils-test/element-tests'

describe('<Button/>', () => {
  // Basic library element test suite
  // elementTests(Button)

  afterEach(cleanup)

  test('should render a button element default', () => {
    const { container, getByText } = render(<Button>Button</Button>)

    // By default the button should have type button
    expect(container).toContainElement(document.querySelector('button[type="button"]'))
    // By default the class btn is included
    expect(getByText('Button')).toHaveClass('btn')
    // Don't render anchor class without anchor prop
    expect(getByText('Button')).not.toHaveClass('btn-anchor')
  })

  test('should render any brand classes for prop color', () => {
    const { getByText } = render(<Button color='info'>Button</Button>)
    expect(getByText('Button')).toHaveClass('btn btn-info')
  })

  test('should render the outline classes for outline', () => {
    const { getByText } = render(<Button outline='primary'>Button</Button>)
    expect(getByText('Button')).toHaveClass('btn btn-outline-primary')
  })

  test('should render class for button size', () => {
    const { getByText } = render(<Button size='sm'>Button</Button>)
    expect(getByText('Button')).toHaveClass('btn btn-sm')
  })

  test('should render only class btn-anchor when passed prop', () => {
    const { getByText } = render(<Button anchor>Button</Button>)
    expect(getByText('Button')).toHaveClass('btn-anchor')
  })

  test('should use override type', () => {
    const { container } = render(<Button type='reset'>Button</Button>)
    expect(container).toContainElement(document.querySelector('button[type="reset"]'))
  })

  test('simulates click events', () => {
    const onButtonClick = jest.fn()
    const { getByText } = render(<Button onClick={onButtonClick}>Button</Button>)

    fireEvent.click(getByText('Button'))
    expect(onButtonClick).toHaveBeenCalled()
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
