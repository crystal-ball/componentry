import React from 'react';
import { Alert } from '../lib';

export default function Alerts() {

  function logDismiss() {
    console.log('dismiss');
  }

  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <h2>Alerts</h2>
          <Alert color='success' onDismiss={logDismiss}>
            <strong>Well done!</strong> You successfully read this important alert message.
          </Alert>
          <Alert color='info'>
            <strong>Heads up!</strong> This alert needs your attention, but it&apos;s not super important.
          </Alert>
          <Alert color='warning' visibilityTransitionLength={400}>
            <strong>Warning!</strong> Better check yourself, you&apos;re not looking too good.
          </Alert>
          <Alert color='danger' dismissable={false}>
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </Alert>
        </div>
      </div>
    </div>
  );
}
