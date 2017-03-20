import React from 'react';
import { Button } from '../Button';

export default function Buttons() {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <h2>Buttons</h2>
          <div>
            <Button color='primary'>Primary</Button>
            <Button color='secondary'>Secondary</Button>
            <Button color='success'>Success</Button>
            <Button color='info'>Info</Button>
            <Button color='warning'>Warning</Button>
            <Button color='danger'>Danger</Button>
            <Button className='btn-link'>Link</Button>
          </div>
          <p>Text with a 508 accessible button that triggers some <Button link>action</Button></p>
        </div>
      </div>
    </div>
  );
}
