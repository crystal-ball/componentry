// @flow
import React, { Component } from 'react'
import Playground from 'component-playground'

import { Dropdown } from '../../../lib'
import componentExample from './examples/dropdown.txt'

const logActivate = () => console.log('on activate called')
const logDeactivate = () => console.log('on deactivate called')

let count = 1

type State = {
  controlledActive: boolean
}

export default class Dropdowns extends Component<{}, State> {
  state = {
    controlledActive: true
  }

  toggleActive = () => {
    this.setState({ controlledActive: !this.state.controlledActive })
  }

  activate = () => {
    if (count % 2 === 0) this.setState({ controlledActive: true })
    count += 1
  }

  deactivate = () => {
    if (count % 4 === 0) this.setState({ controlledActive: false })
    count += 1
  }

  render() {
    return (
      <div className="mb-5">
        <div className="row">
          <div className="col-12">
            <p className="lead">Dropdown component...</p>
            <Playground
              codeText={componentExample}
              docClass={Dropdown}
              scope={{ React, Dropdown, logActivate, logDeactivate }}
              theme="panda-syntax"
            />
          </div>
        </div>
      </div>
    )
  }
}
