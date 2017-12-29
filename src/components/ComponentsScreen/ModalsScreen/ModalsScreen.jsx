// @flow
import React, { Component } from 'react'

import { Active, Button, Modal } from 'componentry-lib'

type ComponentState = {
  controlledModal: boolean,
}

export default class Modals extends Component<{}, ComponentState> {
  state = {
    controlledModal: false,
  }

  toggleModal = () => {
    this.setState({ controlledModal: !this.state.controlledModal })
  }

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
              <Active>
                <Active.Trigger link={false}>Toggle Modal</Active.Trigger>
                <Modal>
                  <Modal.Header>
                    <Modal.Title>This is the header</Modal.Title>
                    <Active.Trigger link>
                      <svg
                        className="icon close text-dark"
                        role="img"
                        aria-label="close"
                      >
                        <use href="#close" />
                      </svg>
                    </Active.Trigger>
                  </Modal.Header>
                  <Modal.Body>This is a modal</Modal.Body>
                  <Modal.Footer>
                    <Active.Trigger color="dark" outline>
                      Close
                    </Active.Trigger>
                    <Button color="primary">Save Changes</Button>
                  </Modal.Footer>
                </Modal>
              </Active>
              <h4>Controlled Modal</h4>
              <Button onClick={this.toggleModal}>Toggle controlled modal</Button>
              <Modal
                active={this.state.controlledModal}
                deactivate={this.toggleModal}
              >
                <Modal.Body>This is a controlled modal.</Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
