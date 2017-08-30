import React, { Component } from 'react'
import { Dropdown } from '../../lib'

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
    const { controlledActive } = this.state
    this.setState({ controlledActive: !controlledActive })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h2>Dropdowns</h2>
          </div>
          <div className="col-6">
            <h4>Uncontrolled Example</h4>
            <Dropdown onActivate={logActivate} onDeactivate={logDeactivate}>
              <Dropdown.Toggle color="primary">Dropdown</Dropdown.Toggle>
              <Dropdown.Content>
                <h6 className="dropdown-header">Available actions</h6>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
                <div className="dropdown-divider" />
                <Dropdown.Item>Item 4</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
          <div className="col-6">
            <h4>Controlled State Example</h4>
            <Dropdown
              active={this.state.controlledActive}
              onActivate={this.toggleActive}
              onDeactivate={this.toggleActive}
            >
              <Dropdown.Toggle color="primary">Dropdown</Dropdown.Toggle>
              <Dropdown.Content>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}
