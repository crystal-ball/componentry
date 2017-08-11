import React, { Component } from 'react';
import { Button, Modal } from '../../lib';

export default class Modals extends Component {
  state = {
    modalActive: false
  };

  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive });
  };

  render() {
    return (
      <div>
        <h2>Modals</h2>
        <Button color="primary" onClick={this.toggleModal}>
          Toggle Modal
        </Button>

        <Modal active={this.state.modalActive} onDeactivate={this.toggleModal}>
          <Modal.Header>
            <h3 className="modal-title">This is the header</h3>
            <Button className="close-button" link onClick={this.toggleModal}>
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
    );
  }
}
