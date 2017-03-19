import React from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export default function App() {
  return (
    <div>
      <h1>Componentry</h1>
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
      <div>
        <span>This is the chevron icon: <Icon icon='chevron' /><br /></span>
        <span>This is the heart icon: <Icon icon='heart' /><br /></span>
        <span>This is the close icon: <Icon icon='close' /><br /></span>
        <span>This icon is not intended to be a font icon, so it&apos;s baseline will not be adjusted: <Icon icon='close' font={false} /></span>
      </div>
    </div>
  );
}
