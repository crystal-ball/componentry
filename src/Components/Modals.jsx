import React, { Component } from 'react'

import { Button, Modal } from '../../lib'

export default class Modals extends Component {
  state = {
    ariaActive: false,
    modalActive: false
  }

  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive })
  }

  toggleAriaModal = () => {
    this.setState({ ariaActive: !this.state.ariaActive })
  }

  render() {
    const { ariaActive, modalActive } = this.state
    return (
      <div>
        <h2>Modals</h2>
        <div className="col-12">
          A regular modal.
          <Button onClick={this.toggleModal}>Toggle Modal</Button>
          <Modal active={modalActive} onDeactivate={this.toggleModal}>
            <Modal.Header>
              <Modal.Title>This is the header</Modal.Title>
              <Button
                className="close-button"
                aria-label="Close"
                link
                onClick={this.toggleModal}
              >
                <span className="close-icon" />
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
        </div>
        <div className="col-12">
          A modal with an <code>ariaHeader</code> for A++ Accessibility.
          <Button onClick={this.toggleAriaModal}>Toggle Modal</Button>
          <Modal
            active={ariaActive}
            onDeactivate={this.toggleAriaModal}
            ariaTitle="Dialog Accessibility Overview"
          >
            <Modal.Body>
              <Button
                className="close-button"
                aria-label="Close"
                link
                onClick={this.toggleAriaModal}
              >
                <span className="close-icon" />
              </Button>
              <p>When your modal does not have an obvious title, use ariaTitle</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    )
  }
}
