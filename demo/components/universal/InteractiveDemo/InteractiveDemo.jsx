import React, { Component, Fragment } from 'react'
import { Card } from 'componentry'

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

  /**
   * Sets the passed demo defaults as the state that will be used
   */
  constructor(props) {
    super(props)
    this.state = props.defaults
  }

  changeHandler = newState => {
    this.setState(newState)
  }

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
                {formFields.map(
                  (field, idx) =>
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
          <div className={`col-${fieldsLen ? '8' : '12'} d-flex flex-column`}>
            <h4 className="border-bottom border-dark">Rendered</h4>
            <div className="d-flex justify-content-center align-items-center h-100">
              {demoComponent}
            </div>
          </div>
          <div className="col-12 mt-4">
            <PrismHighlighter language="jsx">{codeHighlight}</PrismHighlighter>
          </div>
        </Card.Body>
      </Card>
    )
  }
}
