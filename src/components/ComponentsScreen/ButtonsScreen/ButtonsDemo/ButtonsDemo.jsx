import React, { Component, Fragment } from 'react'
import { Button, Card, Dropdown } from 'componentry-lib'

import PrismHighlighter from 'components/universal/PrismHighlighter'

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'none',
]

const sizes = ['small', 'large', 'none']

export default class ButtonsDemo extends Component {
  state = {
    link: false,
    color: 'primary',
    outline: false,
    size: 'none',
  }

  render() {
    const { color, link, outline, size } = this.state
    const colorString = color === 'none' ? '' : color
    const sizeString = size === 'none' ? '' : size

    const codeContent = `<Button${colorString ? ` color="${colorString}"` : ''}${
      link ? ` link` : ''
    }${outline ? ` outline` : ''}${
      sizeString ? ` size="${sizeString}"` : ''
    }>Button component</Button>`

    return (
      <Fragment>
        <form className="form-inline mb-4">
          Theme color:
          <Dropdown
            className="ml-2"
            onDeactivated={e => {
              const colorValue = e.target.value || color
              this.setState({ color: colorValue })
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
            <label htmlFor="outline">
              Outline:
              <input
                id="outline"
                className="form-check-input ml-2"
                type="checkbox"
                checked={outline}
                onChange={() => {
                  this.setState({ outline: !outline })
                }}
              />
            </label>
          </div>
          <div className="ml-3 d-flex">
            <span>Size:</span>
            <Dropdown
              className="ml-2"
              onDeactivated={e => {
                const sizeValue = e.target.value || size
                this.setState({ size: sizeValue })
              }}
            >
              <Dropdown.Trigger link>{size}</Dropdown.Trigger>
              <Dropdown.Content>
                {sizes.map(sizeValue => (
                  <Dropdown.Item key={sizeValue} value={sizeValue}>
                    {sizeValue}
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown>
          </div>
          <div className="px-3" />
          <div className="ml-5">
            <label htmlFor="link">
              Link:
              <input
                id="link"
                className="form-check-input ml-2"
                type="checkbox"
                checked={link}
                onChange={() => {
                  const colorValue = link ? 'primary' : 'none'
                  this.setState({ link: !link, color: colorValue, outline: false })
                }}
              />
            </label>
          </div>
        </form>
        <Card key="card">
          <Card.Body>
            <Button color={colorString} link={link} outline={outline} size={size}>
              Button component
            </Button>
          </Card.Body>
        </Card>
        <div>
          <PrismHighlighter language="jsx">{codeContent}</PrismHighlighter>
        </div>
      </Fragment>
    )
  }
}
