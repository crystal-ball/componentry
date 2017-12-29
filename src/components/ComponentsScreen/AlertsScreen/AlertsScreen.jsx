// @flow
import React, { Component } from 'react'

import PrismHighlighter from 'components/universal/PrismHighlighter'
import { Active, Alert, Card, Dropdown, Tab } from 'componentry-lib'

type ComponentState = {
  color: string,
  dismissible: boolean,
}

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

/**
 * TODO:
 * Add popover descriptions for:
 *   - Alert configurations
 *   - Color
 *   - Dismissible
 */

export default class extends Component<{}, ComponentState> {
  state = {
    color: 'success',
    dismissible: true,
  }

  handleSelectColor = (e: { target: { value: string } }) => {
    this.setState({ color: e.target.value })
  }

  toggleDismissible = () => {
    this.setState({ dismissible: !this.state.dismissible })
  }

  render() {
    const { color, dismissible } = this.state

    const code = dismissible
      ? `<Active defaultActive>
  <Alert color="${color}" dismissible>
    <strong>Well done!</strong> You successfully read this important
    alert message.
  </Alert>
</Active>`
      : `<Alert color="${color}">
  <strong>Well done!</strong> You successfully read this important
  alert message.
</Alert>`

    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-11">
            <p className="lead mb-5">
              Alerts provide contextual feedback messages for typical user actions
              with the handful of available and flexible alert messages.
            </p>
            <div className="mb-5">
              <h4>Alert configurations:</h4>
              <form className="form-inline mb-4">
                Theme color:
                <Dropdown className="ml-2" onDeactivated={this.handleSelectColor}>
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
                      onChange={this.toggleDismissible}
                    />
                  </label>
                </div>
              </form>
              <Card>
                <Card.Body>
                  {dismissible ? (
                    <Active defaultActive>
                      <Alert color={color} dismissible>
                        <strong>Well done!</strong> You successfully read this
                        important alert message.
                      </Alert>
                    </Active>
                  ) : (
                    <Alert color={color}>
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </Alert>
                  )}
                </Card.Body>
              </Card>
              <PrismHighlighter language="jsx">{code}</PrismHighlighter>
            </div>
            <Alert color="info">
              Dismissible Alerts require library active props. The component is
              wrapped using <code>withActive</code> so disimissible Alerts can
              either be a child of a <code>&lt;State /&gt;</code> component or props{' '}
              <code>active</code> and <code>deactivate</code> can be passed.
            </Alert>
            <div className="mb-5">&nbsp;</div>
            <div>
              <div>
                <h3 className="mb-4 text-right" id="props">
                  Props
                </h3>
                <Tab defaultActive="alert" className="row props-tabs">
                  <div className="col-9">
                    <Tab.ContentContainer>
                      <Tab.Content activeId="alert">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Description</th>
                              <th>Type</th>
                              <th>Default</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>color</td>
                              <td>Sets the theme color of alert</td>
                              <td>
                                <div className="mb-2">
                                  <code>enum</code>
                                </div>
                                {/* <div className="text-muted small d-flex"> */}
                                <div className="text-muted small">Enums: [</div>
                                <div className="text-muted small">
                                  <code>&quot;primary&quot;</code>,<br />
                                  <code>&quot;secondary&quot;</code>,<br />
                                  <code>&quot;success&quot;</code>,<br />
                                  <code>&quot;danger&quot;</code>,<br />
                                  <code>&quot;warning&quot;</code>,<br />
                                  <code>&quot;info&quot;</code>,<br />
                                  <code>&quot;light&quot;</code>,<br />
                                  <code>&quot;dark&quot;</code>
                                  <br />
                                  ]
                                </div>
                                {/* </div> */}
                              </td>
                              <td>
                                <code>undefined</code>
                              </td>
                            </tr>
                            <tr>
                              <td>dismissible</td>
                              <td>
                                Controls whether alert can be dismissed by user,
                                pass <code>false</code> to prevent dismissal of an
                                alert.
                              </td>
                              <td>
                                <code>boolean</code>
                              </td>
                              <td>
                                <code>false</code>
                              </td>
                            </tr>
                            <tr>
                              <td>deactivate</td>
                              <td>
                                When passed, the <code>deactivate</code> will be
                                called in place of internal state change handler.
                                Note that the opacity transition and hiding of the
                                component must be handled externally when passing a
                                custom <code>deactivate</code> handler.
                              </td>
                              <td>
                                <code>Function</code>
                              </td>
                              <td>
                                <code>undefined</code>
                              </td>
                            </tr>
                            <tr>
                              <td>transitionDuration</td>
                              <td>
                                Length of opacity transition, if not passed
                                component will default to 300ms or{' '}
                                <code>THEME</code> value if set using{' '}
                                <code>ThemeProvider</code>.
                              </td>
                              <td>
                                <code>number</code>
                              </td>
                              <td>
                                <code>undefined</code>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab.Content>
                      <Tab.Content activeId="element">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Description</th>
                              <th>Type</th>
                              <th>Default</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>as</td>
                              <td>
                                Element type to create, can be a component or an
                                HTML tag name
                              </td>
                              <td>
                                <code>
                                  ComponentType&lt;any&gt;<br /> | string
                                </code>
                              </td>
                              <td>
                                <code>div</code>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab.Content>
                    </Tab.ContentContainer>
                  </div>
                  <div className="col-3">
                    <Tab.Nav vertical pills>
                      <Tab.Trigger activeId="alert">Alert props</Tab.Trigger>
                      <Tab.Trigger activeId="element">Element props</Tab.Trigger>
                    </Tab.Nav>
                  </div>
                </Tab>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
