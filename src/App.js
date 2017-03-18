import React from 'react';
import { Button } from './Button';

export default function App() {
  return (
    <div>
      <h1>Radical UI</h1>
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
  );
}
