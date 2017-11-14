// @flow
import React, { Component } from 'react'

import { Dropdown } from '../../../lib'

const logActivate = () => console.log('on activate called')
const logDeactivate = () => console.log('on deactivate called')

let count = 1

type State = {
  controlledActive: boolean
}

export default class Dropdowns extends Component<{}, State> {
  state = {
    controlledActive: true
  }

  toggleActive = () => {
    this.setState({ controlledActive: !this.state.controlledActive })
  }

  activate = () => {
    if (count % 2 === 0) this.setState({ controlledActive: true })
    count += 1
  }

  deactivate = () => {
    if (count % 4 === 0) this.setState({ controlledActive: false })
    count += 1
  }

  render() {
    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <p className="lead">Dropdown component...</p>
            <Dropdown onActivate={logActivate} onDeactivate={logDeactivate}>
              <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
              <Dropdown.Content>
                <h6 className="dropdown-header">Available actions</h6>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <div className="dropdown-divider" />
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}
