import React, { Component, Fragment } from 'react'
import { Card, Flex } from 'componentry'

import ClickToCopy from 'components/universal/ClickToCopy'
import PrismHighlighter from 'components/universal/PrismHighlighter'
import FormField from './FormField'

import { component } from './interactive-demo.scss'

type Props = {
  defaults?: Object,
  formFields?: Array<{ label: string }>,
  renderCode: Function,
  renderComponent: Function,
}

export default class InteractiveDemo extends Component<Props> {
  static defaultProps = {
    defaults: {},
    formFields: [],
  }

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Sets the passed demo defaults as the state that will be used
   */
  constructor(props) {
    super(props)
    this.state = props.defaults
  }

  // Methods
  // ---------------------------------------------------------------------------

  changeHandler = newState => {
    this.setState(newState)
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    const { formFields, renderCode, renderComponent } = this.props
    const fieldsLen = !!formFields.length

    // Call renderProps to get computed values
    const codeHighlight = renderCode(this.state)
    const demoComponent = renderComponent(this.state)

    return (
      <Card className={`mt-5 mb-3 ${component}`}>
        <Card.Body className="row">
          {fieldsLen && (
            <div className="col-4">
              <h4 className="border-bottom border-dark">Props</h4>
              <form className="mb-3">
                {formFields.map((field, idx) =>
                  field.label ? (
                    <FormField
                      key={field.label}
                      {...field}
                      value={this.state[field.label]}
                      onChange={this.changeHandler}
                    />
                  ) : (
                    /* eslint-disable react/no-array-index-key */
                    <Fragment key={idx}>{field}</Fragment>
                  ),
                )}
              </form>
            </div>
          )}
          <Flex
            direction="column"
            className={`col-${fieldsLen ? '8' : '12'} rendered-container`}
          >
            <h4 className="border-bottom border-dark">Rendered</h4>
            <Flex align="center" justify="center" className="h-100">
              {demoComponent}
            </Flex>
          </Flex>
          <div className="col-12 mt-4">
            <div className="code-container">
              <div className="copy-container">
                <ClickToCopy copyText={codeHighlight} className="h3 text-light" />
              </div>
              <PrismHighlighter language="jsx">{codeHighlight}</PrismHighlighter>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }
}
