// @flow
import React, { Component } from 'react'

import PrismHighlighter from 'components/universal/PrismHighlighter'
import { Alert, Dropdown, Tab } from '../../../lib'

type State = {
  color: string,
  colorDropdown: boolean,
  dismissible: boolean
}

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark'
]

export default class extends Component<{}, State> {
  state = {
    color: 'success',
    colorDropdown: false,
    dismissible: true
  }

  handleSelectColor = e => {
    this.setState({ color: e.target.value, colorDropdown: false })
  }

  triggerColorDropdown = () => {
    this.setState({ colorDropdown: !this.state.colorDropdown })
  }
  toggleDismissible = () => {
    this.setState({ dismissible: !this.state.dismissible })
  }

  render() {
    const { color, colorDropdown, dismissible } = this.state

    const code = `<Alert color="${color}"${dismissible ? ' dismissible' : ''}>
  <strong>Well done!</strong> You successfully read this important
  alert message.
</Alert>`

    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-10">
            <p className="lead mb-5">
              Provide contextual feedback messages for typical user actions with the
              handful of available and flexible alert messages.
            </p>
            <div className="mb-5">
              {/* <h3 className="mb-4">Alert component</h3> */}
              <form className="form-inline mb-4">
                <Dropdown
                  active={colorDropdown}
                  activate={this.triggerColorDropdown}
                >
                  <Dropdown.Trigger>Theme color</Dropdown.Trigger>
                  <Dropdown.Content>
                    {colors.map(themeColor => (
                      <Dropdown.Item
                        key={themeColor}
                        onClick={this.handleSelectColor}
                        value={themeColor}
                      >
                        {themeColor}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Content>
                </Dropdown>
                <div className="ml-3">
                  <label className="dismissible" htmlFor="dismissible">
                    <input
                      id="dismissible"
                      className="form-check-input"
                      type="checkbox"
                      checked={dismissible}
                      onChange={this.toggleDismissible}
                    />{' '}
                    Dismissible
                  </label>
                </div>
              </form>
              <Alert color={color} dismissible={dismissible}>
                <strong>Well done!</strong> You successfully read this important
                alert message.
              </Alert>
            </div>
            <div className="mb-5">
              <Tab defaultTab="code" className="row">
                <div className="col-9">
                  <Tab.ContentContainer>
                    <Tab.Content tabId="code">
                      <PrismHighlighter language="jsx">{code}</PrismHighlighter>
                    </Tab.Content>
                    <Tab.Content tabId="props">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Color</td>
                            <td>
                              <code>{color}</code>
                            </td>
                          </tr>
                          <tr>
                            <td>Dismissible</td>
                            <td>
                              <code>{String(dismissible)}</code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab.Content>
                  </Tab.ContentContainer>
                </div>
                <div className="col-3">
                  <Tab.Nav vertical pills>
                    <Tab.Trigger tabId="code">Code</Tab.Trigger>
                    <Tab.Trigger tabId="props">Props</Tab.Trigger>
                  </Tab.Nav>
                </div>
              </Tab>
            </div>
            <div className="mb-5">&nbsp;</div>
            <div>
              <div>
                <h3 className="mb-4 text-right">Props</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Default</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>as</td>
                      <td>
                        <code>div</code>
                      </td>
                      <td>
                        <code>
                          ComponentType&lt;any&gt;<br /> | string
                        </code>
                      </td>
                      <td>
                        Element type to create, can be a component or an HTML tag
                        name
                      </td>
                    </tr>
                    <tr>
                      <td>color</td>
                      <td>
                        <code>undefined</code>
                      </td>
                      <td>
                        <code>enum</code>
                      </td>
                      <td>
                        <div>Sets the theme color of alert</div>
                        <div className="text-muted small d-flex">
                          <div>Enums: </div>
                          <div>
                            <code>&quot;primary&quot;</code>,{' '}
                            <code>&quot;secondary&quot;</code>,{' '}
                            <code>&quot;success&quot;</code>,{' '}
                            <code>&quot;danger&quot;</code>,{' '}
                            <code>&quot;warning&quot;</code>,{' '}
                            <code>&quot;info&quot;</code>,{' '}
                            <code>&quot;light&quot;</code>,{' '}
                            <code>&quot;dark&quot;</code>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>dismissible</td>
                      <td>
                        <code>true</code>
                      </td>
                      <td>
                        <code>boolean</code>
                      </td>
                      <td>
                        Controls whether alert can be dismissed by user, pass{' '}
                        <code>false</code> to prevent dismissal of an alert.
                      </td>
                    </tr>
                    <tr>
                      <td>deactivate</td>
                      <td>
                        <code>undefined</code>
                      </td>
                      <td>
                        <code>Function</code>
                      </td>
                      <td>
                        When passed, the <code>deactivate</code> will be called in
                        place of internal state change handler. Note that the
                        opacity transition and hiding of the component must be
                        handled externally when passing a custom{' '}
                        <code>deactivate</code> handler.
                      </td>
                    </tr>
                    <tr>
                      <td>visibilityTransitionLength</td>
                      <td>
                        <code>undefined</code>
                      </td>
                      <td>
                        <code>number</code>
                      </td>
                      <td>
                        Length of opacity transition, if not passed component will
                        default to 300ms or <code>THEME</code> value if set using{' '}
                        <code>ThemeProvider</code>.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
