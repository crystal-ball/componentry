/* eslint-env jest */
/* eslint-disable react/prop-types */

import React from 'react'
import { render, screen } from '@testing-library/react'

import { ComponentryProvider } from '../components/Provider/Provider'

/**
 * Library default component requirement test suite.
 */
export function elementTests(TestComponent, testProps) {
  const componentName = TestComponent.displayName

  /*
   * All components should have a display name so they can be easily debugged
   * even in prod builds
   */
  it(`${componentName} should have a displayName`, () => {
    expect(TestComponent.displayName).toBeTruthy()
  })

  /*
   * All components should meet the following requirements:
   * 1. Children are passed through
   * 2. className prop is appended
   * 3. Custom attributes are passed through
   */
  it(`${componentName} should handle component element requirements`, () => {
    const TestChild = () => <span>Test child content</span>

    render(
      <TestComponent
        {...testProps}
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
  it(`${componentName} should render as specified html element or component`, () => {
    // Create a component to validate that the TestComponent returns.
    const TestAs = ({ isRad }) => <div>{isRad ? 'RAD' : null}</div>

    render(<TestComponent {...testProps} as={TestAs} isRad />)

    expect(screen.getByText('RAD')).toBeInTheDocument()
  })

  /*
   * Test that setting theme values for props are passed to the component, and
   * that JSX props passed to the component will override the theme defaults.
   * Also test that the `themeCx` prop can be used to pass a className
   * by default to all component instances
   */
  it(`${componentName} should merge theme and JSX props correctly`, () => {
    function ProviderWrapper({ children }) {
      return (
        <ComponentryProvider
          components={{
            [componentName]: {
              themeCx: 'theme-class',
              'data-radical': 'hecka',
            },
          }}
        >
          {children}
        </ComponentryProvider>
      )
    }

    render(
      <>
        <TestComponent {...testProps} data-testid='theme'>
          Theme values example
        </TestComponent>
        <TestComponent
          {...testProps}
          data-radical='nope'
          data-testid='jsx'
          themeCx={null}
        >
          JSX overrides example
        </TestComponent>
        <TestComponent
          {...testProps}
          className='jsx-class'
          data-testid='merge'
          fontWeight='bold'
          textTransform='uppercase'
        >
          Classes merging example
        </TestComponent>
      </>,
      { wrapper: ProviderWrapper },
    )

    expect(screen.getByTestId('theme')).toHaveClass('theme-class')
    expect(screen.getByTestId('theme')).toHaveAttribute('data-radical', 'hecka')

    expect(screen.getByTestId('jsx')).not.toHaveClass('theme-class')
    expect(screen.getByTestId('jsx')).toHaveAttribute('data-radical', 'nope')

    expect(screen.getByTestId('merge')).toHaveClass(
      'theme-class jsx-class font-bold uppercase',
    )
    expect(screen.getByTestId('merge')).toHaveAttribute('data-radical', 'hecka')
  })

  /*
   * Test that a couple of the library shared className and style props are
   * computed and rendered correctly
   */
  it(`${componentName} should include library classes and styles correctly`, () => {
    render(
      <TestComponent
        {...testProps}
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

    expect(screen.getByTestId('component')).toHaveClass('jsx-class text-center uppercase')

    expect(screen.getByTestId('component')).toHaveStyle(`
      position: relative;
    `)
  })
}
