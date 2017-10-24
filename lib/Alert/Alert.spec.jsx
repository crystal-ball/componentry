import React from 'react'
import { mount, shallow } from 'enzyme'

import Alert from './index'

describe('<Alert/>', () => {
  test('should render an alert with a close button by default', () => {
    // Defaults
    const wrapper = mount(<Alert color="success">Warning!</Alert>)
    expect(wrapper.find('.alert.alert-success').length).toEqual(1) // default classes
    expect(wrapper.find('.alert[role="alert"]').length).toEqual(1) // correct aria role
    expect(wrapper.find('.alert[aria-hidden="false"]').length).toEqual(1) // default visible

    // Default close button
    expect(wrapper.find('button').length).toEqual(1) // is rendered
    expect(wrapper.find('svg.close[aria-label="close"]').length).toEqual(1) // correct aria label
  })

  test('should render the appropriate contextual color class', () => {
    // color prop should determine contextual class output
    const wrapper = shallow(<Alert color="danger">Warning!</Alert>)
    expect(wrapper.find('.alert.alert-danger').length).toEqual(1)
  })

  test('should not render a close button if not dismissible', () => {
    // passing dismissible false suppresses the close button
    const wrapper = mount(
      <Alert color="danger" dismissible={false}>
        Warning!
      </Alert>
    )

    expect(wrapper.find('button').length).toEqual(0)
  })

  test('should bind passed onDismiss to close button', () => {
    const onDismiss = jest.fn()
    const wrapper = mount(
      <Alert color="danger" onDismiss={onDismiss}>
        Warning!
      </Alert>
    )
    wrapper.find('button').simulate('click')
    expect(onDismiss).toHaveBeenCalled()
    // Alert visibility state change handler has been overridden, other than calling
    // passed onDismiss Alert should still be visible & unchanved
    expect(wrapper.find('.alert.alert-danger').length).toEqual(1)
    expect(wrapper.find('.alert[aria-hidden="false"]').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
  })

  // TODO: Test clicking button without passing onDismiss
})
