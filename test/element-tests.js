/* eslint-env jest */
import React from 'react'
import { render, screen } from '@testing-library/react'

import { Theme } from '../src/Theme/Theme'

/**
 * Library default component requirment test suite.
 */
export function elementTests(TestComponent) {
  const componentName = TestComponent.displayName
  /*
   * All components should have a display name so they can be easily debugged
   * even in prod builds
   */
  test(`${componentName} should have a displayName`, () => {
    expect(TestComponent.displayName).toBeTruthy()
  })

  /*
   * All components should meet the following requirements:
   * 1. Children are passed through
   * 2. className prop is appended
   * 3. Custom attributes are passed through
   */
  test(`${componentName} should handle component element requirements`, () => {
    const TestChild = () => <span>Test child content</span>

    render(
      <TestComponent
        className='test-custom'
        data-test='test-custom'
        data-testid='component'
      >
        Component
        <TestChild />
      </TestComponent>,
    )

    expect(screen.getByText('Test child content')).toBeInTheDocument() // √ children
    expect(screen.getByTestId('component')).toHaveClass('test-custom') // √ className
    expect(screen.getByTestId('component')).toHaveAttribute('data-test', 'test-custom') // √ attrs
  })

  /*
   * Test that any html tag or component can be passed through the 'as' prop to
   * override the parent element the component renders
   */
  test(`${componentName} should render as specified html element or component`, () => {
    // Create a component to validate that the TestComponent returns.
    const TestAs = ({ isRad }) => <div>{isRad ? 'RAD' : null}</div> // eslint-disable-line

    render(<TestComponent isRad as={TestAs} />)

    expect(screen.getByText('RAD')).toBeInTheDocument()
  })

  /*
   * Test that setting theme values for props are passed to the component, and
   * that JSX props passed to the component will override the theme defaults.
   * Also test that the `themeClassName` prop can be used to pass a className
   * by default to all component instances
   */
  test(`${componentName} should merge theme and JSX props correctly`, () => {
    render(
      <Theme
        theme={{
          [componentName]: {
            'themeCx': 'theme-class',
            'data-radical': 'hecka',
          },
        }}
      >
        <TestComponent data-testid='theme'>Theme values example</TestComponent>
        <TestComponent data-radical='nope' data-testid='jsx' themeCx={null}>
          JSX overrides example
        </TestComponent>
        <TestComponent
          className='jsx-class'
          data-testid='merge'
          fontWeight='bold'
          textTransform='uppercase'
        >
          Classes merging example
        </TestComponent>
      </Theme>,
    )

    expect(screen.getByTestId('theme')).toHaveClass('theme-class')
    expect(screen.getByTestId('theme')).toHaveAttribute('data-radical', 'hecka')

    expect(screen.getByTestId('jsx')).not.toHaveClass('theme-class')
    expect(screen.getByTestId('jsx')).toHaveAttribute('data-radical', 'nope')

    expect(screen.getByTestId('merge')).toHaveClass(
      'theme-class jsx-class font-weight-bold text-transform-uppercase',
    )
    expect(screen.getByTestId('merge')).toHaveAttribute('data-radical', 'hecka')
  })

  /*
   * Test that a couple of the library shared className and style props are
   * computed and rendered correctly
   */
  test(`${componentName} should include library classes and styles correctly`, () => {
    render(
      <TestComponent
        className='jsx-class'
        data-testid='component'
        lineHeight={2}
        my={16}
        style={{ position: 'relative' }}
        textAlign='center'
        textTransform='uppercase'
      >
        Test component
      </TestComponent>,
    )

    expect(screen.getByTestId('component')).toHaveClass(
      'jsx-class text-align-center text-transform-uppercase',
    )

    expect(screen.getByTestId('component')).toHaveStyle(`
      line-height: 2;
      margin-left: 16;
      margin-right: 16;
      position: relative;
    `)
  })
}
