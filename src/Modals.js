import React, { Component } from 'react';
import { Button, Icon, Modal } from '../lib';

export default class Modals extends Component {
  state = {
    modalActive: false,
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

        <Modal active={this.state.modalActive}>
          <Modal.Header>
            <h3 className="modal-title">This is the header</h3>
            <Button link onClick={this.toggleModal}>
              <Icon icon="close" font={false} />
            </Button>
          </Modal.Header>
          <Modal.Body>This is a modal</Modal.Body>
          <Modal.Footer>
            <Button color="secondary">Close</Button>
            <Button color="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
