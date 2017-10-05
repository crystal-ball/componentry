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

let count = 1

export default class Dropdowns extends Component {
  state = {
    controlledActive: true
  }

  toggleActive = () => {
    this.setState({ controlledActive: !this.state.controlledActive })
  }

  activate = () => {
    console.log('custom activate')
    if (count % 2 === 0) this.setState({ controlledActive: true })
    count += 1
  }

  deactivate = () => {
    if (count % 4 === 0) this.setState({ controlledActive: false })
    count += 1
  }

  render() {
    const { controlledActive } = this.state
    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <p className="lead">Dropdown component...</p>
            <Dropdown
              active={controlledActive}
              activate={this.activate}
              deactivate={this.deactivate}
            >
              <Dropdown.Trigger>Toggle</Dropdown.Trigger>
              <Dropdown.Content>Inner dropdown content</Dropdown.Content>
            </Dropdown>

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
