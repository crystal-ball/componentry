import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Alert from './Alert'
import elementTests from '../../test/element-tests'

describe('<Alert/>', () => {
  // Basic library element test suite
  elementTests(Alert)
  elementTests(Alert.Close)

  test('should render an alert without a close button by default', () => {
    const { container } = render(<Alert color='success'>Warning!</Alert>)

    expect(container.firstChild).toHaveClass('alert alert-success')
    expect(container.firstChild).toHaveAttribute('role', 'alert')
  })

  test('should not render a close button if not dismissible', () => {
    const { queryByLabelText } = render(<Alert color='danger'>Warning!</Alert>)
    expect(queryByLabelText('close')).toBeFalsy()
  })

  test('should bind passed deactivate to close button', () => {
    const deactivate = jest.fn()
    const { container, getByLabelText } = render(
      <Alert active dismissible color='danger' deactivate={deactivate}>
        Warning!
      </Alert>,
    )

    fireEvent.click(getByLabelText('close'))
    expect(deactivate).toHaveBeenCalled()

    // Alert visibility state change handler has been overridden, other than calling
    // passed deactivate Alert should still be visible & unchanved
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'false')
  })

  // TODO: test active and deactivate handling
})

describe('<Alert /> snapshots', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Alert active dismissible color='danger' deactivate={jest.fn()}>
        Warning!
      </Alert>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
