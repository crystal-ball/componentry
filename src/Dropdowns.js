import React, { Component } from 'react';
import { Button, Dropdown } from '../lib';

export default class Dropdowns extends Component {
  state = {
    controlledActive: false,
  };

  logActivate() {
    console.log('on activate called');
  }
  logDeactivate() {
    console.log('on deactivate called');
  }

  toggleActive = () => {
    console.log(this);
    const { controlledActive } = this.state;
    this.setState({ controlledActive: !controlledActive });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h2>Dropdowns</h2>
          </div>
          <div className="col-6">
            <h4>Uncontrolled Example</h4>
            <Dropdown
              onActivate={this.logActivate}
              onDeactivate={this.logDeactivate}
            >
              <Dropdown.Trigger color="primary">Dropdown</Dropdown.Trigger>
              <Dropdown.Content>
                <h6 className="dropdown-header">Available actions</h6>
                <Button className="dropdown-item">Item 1</Button>
                <Button className="dropdown-item">Item 2</Button>
                <Button className="dropdown-item">Item 3</Button>
                <div className="dropdown-divider" />
                <Button className="dropdown-item">Item 4</Button>
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
              <Dropdown.Trigger color="primary">Dropdown</Dropdown.Trigger>
              <Dropdown.Content>
                <Button className="dropdown-item">Item 1</Button>
                <Button className="dropdown-item">Item 2</Button>
                <Button className="dropdown-item">Item 3</Button>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
