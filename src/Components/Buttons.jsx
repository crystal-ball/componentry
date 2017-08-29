import React from 'react'
import { Button } from '../../lib'

export default function Buttons() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <p className="lead">Button component motivation...</p>
        </div>
        <div className="col-6">
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
          <div>
            <Button size="large">Large</Button>
            <Button size="small">Small</Button>
          </div>
        </div>
        <div className="col-6">
          <h4>A++ Acessibility</h4>
          <p>
            Text with a 508 accessible button that triggers some application{' '}
            <Button link>action</Button>
          </p>
        </div>
        <div className="col-6">
          Set a default theme color for buttons using the library ThemeProvider to
          shorthand creating default buttons:
          <Button>Default Theme Color</Button>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <h2>Props</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Default</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>color</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>large</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>link</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>onMouseDown</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>outline</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>small</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>type</td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
