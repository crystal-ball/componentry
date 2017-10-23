import React, { Component } from 'react'
import Playground from 'component-playground'

import { Button, Modal } from '../../../lib'

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/modal')

export default class Modals extends Component {
  state = {
    ariaActive: false,
    modalActive: false
  }

  toggleModal = () => {
    console.log('toggle me')
    this.setState({ modalActive: !this.state.modalActive }, () => {
      this.forceUpdate()
    })
  }

  toggleAriaModal = () => {
    this.setState({ ariaActive: !this.state.ariaActive })
  }

  render() {
    const { modalActive } = this.state
    const { toggleModal } = this

    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <p className="lead">Modal component...</p>
            <Playground
              codeText={componentExample}
              docClass={Modal}
              scope={{ React, Button, Modal, modalActive, toggleModal }}
              theme="panda-syntax"
            />
          </div>
        </div>
      </div>
    )
  }
}
