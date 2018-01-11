// @flow
import React, { Component } from 'react'

import { Active, Button, Modal, Drawer } from 'componentry-lib'

type ComponentState = {
  controlledModal: boolean
}

export default class Modals extends Component<{}, ComponentState> {
  state = {
    controlledModal: false
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
                  <Modal.Body>
                    This is a modal
                    <Drawer>
                      <Drawer.Trigger link className="my-2">
                        <svg role="img" className="icon chevron font">
                          <use href="#chevron" />
                        </svg>
                        Reveal more content
                      </Drawer.Trigger>
                      <Drawer.Content>
                        Esse nulla excepteur amet minim et sed dolor laborum laboris
                        id laborum ad non laboris sunt in sed excepteur ut dolor in
                        eu proident consequat in proident proident incididunt sunt
                        sint ea in deserunt aliqua aute velit magna ut culpa nulla
                        ut sint in dolore consequat ut velit sit non est incididunt
                        amet ut amet amet magna consequat quis sed veniam ex cillum
                        est commodo nostrud velit ut ut commodo laborum exercitation
                        in eu qui irure aliquip nulla dolor eu magna nisi irure sint
                        voluptate id incididunt reprehenderit occaecat duis nisi
                        minim commodo ea aliquip tempor irure velit eu laborum
                        veniam cupidatat mollit id esse laborum incididunt consequat
                        quis non non quis ut mollit pariatur nisi ad laborum velit
                        aliqua culpa officia dolore non nisi mollit non ea cupidatat
                        do sed nostrud aute incididunt tempor aliqua eiusmod mollit
                        nulla in in aute magna dolor nulla ad reprehenderit ut minim
                        non labore velit enim duis nulla minim voluptate laboris ut
                        laborum anim incididunt anim sint laboris non consequat
                        culpa esse dolor sed sit ea sit occaecat consequat ut
                        voluptate in dolore ad ea irure veniam in dolore dolor
                        consequat qui pariatur sunt qui do nisi proident dolore est
                        sit laboris adipisicing cillum veniam et reprehenderit do
                        laboris magna id.This is a modalEsse nulla excepteur amet
                        minim et sed dolor laborum laboris id laborum ad non laboris
                        sunt in sed excepteur ut dolor in eu proident consequat in
                        proident proident incididunt sunt sint ea in deserunt aliqua
                        aute velit magna ut culpa nulla ut sint in dolore consequat
                        ut velit sit non est incididunt amet ut amet amet magna
                        consequat quis sed veniam ex cillum est commodo nostrud
                        velit ut ut commodo laborum exercitation in eu qui irure
                        aliquip nulla dolor eu magna nisi irure sint voluptate id
                        incididunt reprehenderit occaecat duis nisi minim commodo ea
                        aliquip tempor irure velit eu laborum veniam cupidatat
                        mollit id esse laborum incididunt consequat quis non non
                        quis ut mollit pariatur nisi ad laborum velit aliqua culpa
                        officia dolore non nisi mollit non ea cupidatat do sed
                        nostrud aute incididunt tempor aliqua eiusmod mollit nulla
                        in in aute magna dolor nulla ad reprehenderit ut minim non
                        labore velit enim duis nulla minim voluptate laboris ut
                        laborum anim incididunt anim sint laboris non consequat
                        culpa esse dolor sed sit ea sit occaecat consequat ut
                        voluptate in dolore ad ea irure veniam in dolore dolor
                        consequat qui pariatur sunt qui do nisi proident dolore est
                        sit laboris adipisicing cillum veniam et reprehenderit do
                        laboris magna id.This is a modalEsse nulla excepteur amet
                        minim et sed dolor laborum laboris id laborum ad non laboris
                        sunt in sed excepteur ut dolor in eu proident consequat in
                        proident proident incididunt sunt sint ea in deserunt aliqua
                        aute velit magna ut culpa nulla ut sint in dolore consequat
                        ut velit sit non est incididunt amet ut amet amet magna
                        consequat quis sed veniam ex cillum est commodo nostrud
                        velit ut ut commodo laborum exercitation in eu qui irure
                        aliquip nulla dolor eu magna nisi irure sint voluptate id
                        incididunt reprehenderit occaecat duis nisi minim commodo ea
                        aliquip tempor irure velit eu laborum veniam cupidatat
                        mollit id esse laborum incididunt consequat quis non non
                        quis ut mollit pariatur nisi ad laborum velit aliqua culpa
                        officia dolore non nisi mollit non ea cupidatat do sed
                        nostrud aute incididunt tempor aliqua eiusmod mollit nulla
                        in in aute magna dolor nulla ad reprehenderit ut minim non
                        labore velit enim duis nulla minim voluptate laboris ut
                        laborum anim incididunt anim sint laboris non consequat
                        culpa esse dolor sed sit ea sit occaecat consequat ut
                        voluptate in dolore ad ea irure veniam in dolore dolor
                        consequat qui pariatur sunt qui do nisi proident dolore est
                        sit laboris adipisicing cillum veniam et reprehenderit do
                        laboris magna id.
                      </Drawer.Content>
                    </Drawer>
                  </Modal.Body>
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
