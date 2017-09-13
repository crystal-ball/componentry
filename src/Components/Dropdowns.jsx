import React, { Component } from 'react'
import Playground from 'component-playground'

import { Dropdown } from '../../lib'

/* eslint-disable import/no-webpack-loader-syntax */
const componentExample = require('raw-loader!./examples/dropdown')

function logActivate() {
  console.log('on activate called')
}
function logDeactivate() {
  console.log('on deactivate called')
}

export default class Dropdowns extends Component {
  state = {
    controlledActive: false
  }

  toggleActive = () => {
    this.setState({ controlledActive: !this.state.controlledActive })
  }

  render() {
    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <p className="lead">Dropdown component...</p>
            <Playground
              codeText={componentExample}
              docClass={Dropdown}
              scope={{ React, Dropdown, logActivate, logDeactivate }}
              theme="panda-syntax"
            />
          </div>
        </div>
      </div>
    )
  }
}
