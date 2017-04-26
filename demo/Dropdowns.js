import React, { Component } from 'react';
import { Button, Dropdown } from '../index';

export default class Dropdowns extends Component {

  state = {
    controlledActive: false
  }

  logActivate() { console.log('on activate called'); }
  logDeactivate() { console.log('on deactivate called'); }

  toggleActive = () => {
    const { controlledActive } = this.state;
    this.setState({ controlledActive: !controlledActive });
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <h2>Dropdowns</h2>
          </div>
          <div className='col-6'>
            <h4>Uncontrolled Example</h4>
            <Dropdown
              onActivate={this.logActivate}
              onDeactivate={this.logDeactivate}
            >
              <Dropdown.Trigger color='primary'>Dropdown</Dropdown.Trigger>
              <Dropdown.Menu>
                <Button className='dropdown-item'>Item 1</Button>
                <Button className='dropdown-item'>Item 2</Button>
                <Button className='dropdown-item'>Item 3</Button>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='col-6'>
            <h4>Controlled State Example</h4>
            <Dropdown
              active={this.state.controlledActive}
              onActivate={this.toggleActive}
              onDeactivate={this.toggleActive}
            >
              <Dropdown.Trigger color='primary'>Dropdown</Dropdown.Trigger>
              <Dropdown.Menu>
                <Button className='dropdown-item'>Item 1</Button>
                <Button className='dropdown-item'>Item 2</Button>
                <Button className='dropdown-item'>Item 3</Button>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
