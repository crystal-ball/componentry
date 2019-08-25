/* eslint-disable react/no-multi-comp */
import React from 'react'
import { render } from '@testing-library/react'

import Theme from '../Theme/Theme'

/**
 * Library default component requirment test suite.
 */
const elementTests = TestComponent => {
  /*
   * All components should meet the following requirements:
   * 1. Children are passed through
   * 2. className prop is appended
   * 3. Custom attributes are passed through
   */
  test('should handle component element requirements', () => {
    const TestChild = () => <div>Test child content</div>

    const { getByText } = render(
      <TestComponent className='test-custom' data-test='test-custom'>
        Component
        <TestChild />
      </TestComponent>,
    )

    getByText('Test child content') // √ children
    expect(getByText('Component')).toHaveClass('test-custom') // √ className
    expect(getByText('Component')).toHaveAttribute('data-test', 'test-custom') // √ attrs
  })

  /*
   * Test that any html tag or component can be passed through the 'as' prop to
   * override the parent element the component renders
   */
  test('should render as specified html element or component', () => {
    // Create a component to validate that the TestComponent returns.
    const TestAs = ({ isRad }) => <div>{isRad ? 'RAD' : null}</div>

    const { getByText } = render(<TestComponent as={TestAs} isRad />)

    getByText('RAD')
  })

  /*
   * Test that setting theme values for props are passed to the component, and
   * that JSX props passed to the component will override the theme defaults.
   * Also test that the `themeClassName` prop can be used to pass a className
   * by default to all component instances
   */
  test('should merge theme and JSX props correctly', () => {
    const { getByText } = render(
      <Theme
        theme={{
          [TestComponent.displayName]: {
            themeClassName: 'theme-class',
            'data-radical': 'hecka',
          },
        }}
      >
        <TestComponent>Theme values example</TestComponent>
        <TestComponent themeClassName={null} data-radical='nope'>
          JSX overrides example
        </TestComponent>
        <TestComponent className='jsx-class' textAlign='center' uppercase>
          Classes merging example
        </TestComponent>
      </Theme>,
    )

    expect(getByText('Theme values example')).toHaveClass('theme-class')
    expect(getByText('Theme values example')).toHaveAttribute('data-radical', 'hecka')

    expect(getByText('JSX overrides example')).not.toHaveClass('theme-class')
    expect(getByText('JSX overrides example')).toHaveAttribute('data-radical', 'nope')

    expect(getByText('Classes merging example')).toHaveClass(
      'theme-class jsx-class text-center text-uppercase',
    )
    expect(getByText('Classes merging example')).toHaveAttribute('data-radical', 'hecka')
  })

  /*
   * Test that a couple of the library shared className and style props are
   * computed and rendered correctly
   */
  test('should include library classes and styles correctly', () => {
    const { getByText } = render(
      <TestComponent
        className='jsx-class'
        textAlign='center'
        uppercase
        lineHeight={2}
        my={16}
        style={{ position: 'relative' }}
      >
        Test component
      </TestComponent>,
    )

    expect(getByText('Test component')).toHaveClass(
      'jsx-class text-center text-uppercase',
    )
    expect(getByText('Test component')).toHaveStyle(`
      line-height: 2;
      margin-left: 16;
      margin-right: 16;
      position: relative;
    `)
  })
}
export default elementTests
