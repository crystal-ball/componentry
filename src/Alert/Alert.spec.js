import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Alert } from './Alert'

describe('<Alert/>', () => {
  // Basic library element test suite
  elementTests(Alert)
  elementTests(Alert.Close)

  test('should render an alert without a close button by default', () => {
    const { container } = render(<Alert color='success'>Warning!</Alert>)

    expect(container.firstChild).toHaveClass('🅲-alert alert-primary alert-color-success')
    expect(container.firstChild).toHaveAttribute('role', 'alert')
  })

  test('should not render a close button if not dismissible', () => {
    render(<Alert color='danger'>Warning!</Alert>)
    expect(screen.queryByLabelText('close')).toBeFalsy()
  })

  test('should bind passed deactivate to close button', async () => {
    const deactivate = jest.fn()
    const { container } = render(
      <Alert color='danger' deactivate={deactivate} active dismissible>
        Warning!
      </Alert>,
    )

    expect(screen.getByText('Warning!')).toBeInTheDocument()

    await fireEvent.click(screen.getByLabelText('close'))
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
      <Alert color='danger' deactivate={jest.fn()} active dismissible>
        Warning!
      </Alert>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
