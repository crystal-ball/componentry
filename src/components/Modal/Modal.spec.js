import React from 'react'
import { render } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Modal } from './Modal'

describe('<Modal />', () => {
  // Basic library element test suite
  // elementTests(Modal)
  // elementTests(Modal.Header)
  // elementTests(Modal.Title)
  // elementTests(Modal.Body)
  elementTests(Modal.Footer)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Modal /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Modal active>
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

    // eslint-disable-next-line testing-library/no-node-access -- Modal returns overlay and dialog
    expect(container.children).toMatchSnapshot()
  })
})
