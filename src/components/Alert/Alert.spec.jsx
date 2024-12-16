import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'

import { elementTests } from '../../test/element-tests'
import { Alert } from './Alert'

describe('<Alert/>', () => {
  // Basic library element test suite
  elementTests(Alert)
  elementTests(Alert.Close)

  it('should render an alert without a close button by default', () => {
    render(<Alert color='success'>Warning!</Alert>)

    expect(screen.getByRole('alert')).toHaveClass(
      'C9Y-Alert-base C9Y-Alert-filled C9Y-Alert-successColor',
    )
    expect(screen.getByRole('alert')).toHaveAttribute('role', 'alert')
  })

  it('should not render a close button if not dismissible', () => {
    render(<Alert color='danger'>Warning!</Alert>)

    expect(screen.queryByLabelText('close')).not.toBeInTheDocument()
  })

  it('should bind passed deactivate to close button', async () => {
    const deactivate = vi.fn()
    render(
      <Alert color='danger' deactivate={deactivate} active dismissible>
        Warning!
      </Alert>,
    )

    expect(screen.getByText('Warning!')).toBeInTheDocument()

    await userEvent.click(screen.getByLabelText('close'))

    // eslint-disable-next-line jest/prefer-called-with
    expect(deactivate).toHaveBeenCalled()

    // Alert visibility state change handler has been overridden, other than calling
    // passed deactivate Alert should still be visible & unchanged
    expect(screen.getByRole('alert')).toHaveAttribute('aria-hidden', 'false')
  })

  // TODO: test active and deactivate handling
})

describe('<Alert /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Alert color='danger' deactivate={vi.fn()} active dismissible>
        Warning!
      </Alert>,
    )

    expect(screen.getByRole('alert')).toMatchSnapshot()
  })
})
