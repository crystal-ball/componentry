import React, { Component } from 'react'
import { Active, Alert, Card, Dropdown } from 'componentry-lib'

import DismissibleExample from './content/DismissibleExample.md'
import NonDismissibleExample from './content/NonDismissibleExample.md'

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

export default class AlertsDemo extends Component {
  state = {
    color: 'success',
    dismissible: true,
  }

  render() {
    const { color, dismissible } = this.state

    return [
      <form className="form-inline mb-4" key="form">
        Theme color:
        <Dropdown
          className="ml-2"
          onDeactivated={e => {
            this.setState({ color: e.target.value })
          }}
        >
          <Dropdown.Trigger link>{color}</Dropdown.Trigger>
          <Dropdown.Content>
            {colors.map(themeColor => (
              <Dropdown.Item key={themeColor} value={themeColor}>
                {themeColor}
              </Dropdown.Item>
            ))}
          </Dropdown.Content>
        </Dropdown>
        <div className="ml-3">
          <label className="dismissible" htmlFor="dismissible">
            Dismissible:
            <input
              id="dismissible"
              className="form-check-input ml-2"
              type="checkbox"
              checked={dismissible}
              onChange={() => {
                this.setState({ dismissible: !this.state.dismissible })
              }}
            />
          </label>
        </div>
      </form>,
      <Card key="card">
        <Card.Body>
          {dismissible ? (
            <Active defaultActive>
              <Alert color={color} dismissible>
                <strong>Well done!</strong> You successfully read this important
                alert message.
              </Alert>
            </Active>
          ) : (
            <Alert color={color}>
              <strong>Well done!</strong> You successfully read this important alert
              message.
            </Alert>
          )}
        </Card.Body>
      </Card>,
      <div key="example">
        {dismissible ? <DismissibleExample /> : <NonDismissibleExample />}
      </div>,
    ]
  }
}
