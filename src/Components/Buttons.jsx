import React from 'react';
import { Button } from '../../lib';

export default function Buttons() {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h2>Buttons</h2>
          <div>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="info">Info</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button className="btn-link">Link</Button>
          </div>
        </div>
        <div className="col-6">
          <h2>Outline Buttons</h2>
          <div>
            <Button color="primary" outline>
              Primary
            </Button>
            <Button color="success" outline>
              Success
            </Button>
            <Button color="info" outline>
              Info
            </Button>
            <Button color="warning" outline>
              Warning
            </Button>
            <Button color="danger" outline>
              Danger
            </Button>
            <Button className="btn-link" outline>
              Link
            </Button>
          </div>
        </div>
        <div className="col-6">
          <h2>Button Sizes</h2>
          <div>
            <Button color="primary" large>
              Large
            </Button>
            <Button color="primary" small>
              Small
            </Button>
          </div>
        </div>
        <div className="col-6">
          <h4>A++ Acessibility</h4>
          <p>
            Text with a 508 accessible button that triggers some application{' '}
            <Button link>action</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
