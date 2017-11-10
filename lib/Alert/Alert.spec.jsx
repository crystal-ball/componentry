import React from 'react'
import { mount } from 'enzyme'

import Alert from './index'
import elementTests from '../utils-test/element-tests'

describe('<Alert/>', () => {
  // Basic library element test suite
  elementTests(Alert)

  test('should render an alert without a close button by default', () => {
    const wrapper = mount(<Alert color="success">Warning!</Alert>)

    expect(wrapper.find('.alert.alert-success').length).toEqual(1) // default classes
    expect(wrapper.find('.alert[role="alert"]').length).toEqual(1) // correct aria role
  })

  test('should render the appropriate contextual color class', () => {
    // color prop should determine contextual class output
    const wrapper = mount(<Alert color="danger">Warning!</Alert>)
    expect(wrapper.find('.alert.alert-danger').length).toEqual(1)
  })

  test('should not render a close button if not dismissible', () => {
    // passing dismissible false suppresses the close button
    const wrapper = mount(<Alert color="danger">Warning!</Alert>)

    expect(wrapper.find('button').length).toEqual(0)
  })

  test('should bind passed deactivate to close button', () => {
    const deactivate = jest.fn()
    const wrapper = mount(
      <Alert color="danger" deactivate={deactivate} dismissible>
        Warning!
      </Alert>
    )
    wrapper.find('button').simulate('click')
    expect(deactivate).toHaveBeenCalled()
    // Alert visibility state change handler has been overridden, other than calling
    // passed deactivate Alert should still be visible & unchanved
    expect(wrapper.find('.alert.alert-danger').length).toEqual(1)
    expect(wrapper.find('.alert[aria-hidden="false"]').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
  })

  // TODO: test active and deactivate handling
})
