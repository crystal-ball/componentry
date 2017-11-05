// @flow
import React, { Component } from 'react'

import { Button, Modal, State } from '../../../lib'

export default class Modals extends Component<{}> {
  render() {
    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <p className="lead">Modal component...</p>
            <h4>Modal header alignment</h4>
            <p>
              By default the modal header uses flex align-items start to align the
              close button to the top right corner. Use class `.align-items-center`
              to align the close button to the middle of the header.
            </p>
            <div>
              <State>
                <State.Trigger link={false}>Toggle Modal</State.Trigger>
                <Modal>
                  <Modal.Header>
                    <Modal.Title>This is the header</Modal.Title>
                    <Button link>
                      <svg
                        className="icon close text-dark"
                        role="img"
                        aria-label="close"
                      >
                        <use href="#close" />
                      </svg>
                    </Button>
                  </Modal.Header>
                  <Modal.Body>This is a modal</Modal.Body>
                  <Modal.Footer>
                    <Button color="dark" outline onClick={this.toggleModal}>
                      Close
                    </Button>
                    <Button color="primary">Save Changes</Button>
                  </Modal.Footer>
                </Modal>
              </State>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
