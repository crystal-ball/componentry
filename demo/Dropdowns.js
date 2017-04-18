import React from 'react';
import { Button, Dropdown } from '../index';

export default function Dropdowns() {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <h2>Dropdowns</h2>
          <Dropdown>
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
