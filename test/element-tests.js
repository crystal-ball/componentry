/* eslint-disable react/no-multi-comp */
import React from 'react'
import { render } from '@testing-library/react'

import Theme from '../src/Theme/Theme'

/**
 * Library default component requirment test suite.
 */
const elementTests = TestComponent => {
  const name = TestComponent.displayName
  /*
   * All components should have a display name so they can be easily debugged
   * even in prod builds
   */
  test(`${name} should have a displayName`, () => {
    expect(TestComponent.displayName).toBeTruthy()
  })

  /*
   * All components should meet the following requirements:
   * 1. Children are passed through
   * 2. className prop is appended
   * 3. Custom attributes are passed through
   */
  test(`${name} should handle component element requirements`, () => {
    const TestChild = () => <span>Test child content</span>

    const { getByTestId, getByText } = render(
      <TestComponent
        className='test-custom'
        data-test='test-custom'
        data-testid='component'
      >
        Component
        <TestChild />
      </TestComponent>,
    )

    getByText('Test child content') // √ children
    expect(getByTestId('component')).toHaveClass('test-custom') // √ className
    expect(getByTestId('component')).toHaveAttribute('data-test', 'test-custom') // √ attrs
  })

  /*
   * Test that any html tag or component can be passed through the 'as' prop to
   * override the parent element the component renders
   */
  test(`${name} should render as specified html element or component`, () => {
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
  test(`${name} should merge theme and JSX props correctly`, () => {
    const { getByTestId } = render(
      <Theme
        theme={{
          [TestComponent.displayName]: {
            themeClassName: 'theme-class',
            'data-radical': 'hecka',
          },
        }}
      >
        <TestComponent data-testid='theme'>Theme values example</TestComponent>
        <TestComponent themeClassName={null} data-radical='nope' data-testid='jsx'>
          JSX overrides example
        </TestComponent>
        <TestComponent
          className='jsx-class'
          fontWeight='bold'
          uppercase
          data-testid='merge'
        >
          Classes merging example
        </TestComponent>
      </Theme>,
    )

    expect(getByTestId('theme')).toHaveClass('theme-class')
    expect(getByTestId('theme')).toHaveAttribute('data-radical', 'hecka')

    expect(getByTestId('jsx')).not.toHaveClass('theme-class')
    expect(getByTestId('jsx')).toHaveAttribute('data-radical', 'nope')

    expect(getByTestId('merge')).toHaveClass(
      'theme-class jsx-class font-weight-bold text-uppercase',
    )
    expect(getByTestId('merge')).toHaveAttribute('data-radical', 'hecka')
  })

  /*
   * Test that a couple of the library shared className and style props are
   * computed and rendered correctly
   */
  test(`${name} should include library classes and styles correctly`, () => {
    const { getByTestId } = render(
      <TestComponent
        className='jsx-class'
        textAlign='center'
        uppercase
        lineHeight={2}
        my={16}
        style={{ position: 'relative' }}
        data-testid='component'
      >
        Test component
      </TestComponent>,
    )

    expect(getByTestId('component')).toHaveClass(
      'jsx-class text-align-center text-uppercase',
    )

    expect(getByTestId('component')).toHaveStyle(`
      line-height: 2;
      margin-left: 16;
      margin-right: 16;
      position: relative;
    `)
  })
}
export default elementTests
