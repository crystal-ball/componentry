import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Modal } from './Modal'

describe('<Modal />', () => {
  // Basic library element test suite
  elementTests(Modal)
  // elementTests(Modal.Header)
  // elementTests(Modal.Title)
  // elementTests(Modal.Body)
  elementTests(Modal.Footer)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Close /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Modal data-testid='modal'>
        <Modal.Header close>
          <Modal.Title>Demo uncontrolled modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is an uncontrolled modal that will automatically manage its active state
            using the parent Active component.
          </p>
        </Modal.Body>
        <Modal.Footer className='btn-container-x'>Modal Footer</Modal.Footer>
      </Modal>,
    )

    expect(screen.getByTestId('modal')).toMatchSnapshot()
  })
})
