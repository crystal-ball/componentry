import React from 'react'
import { mount } from 'enzyme'
import { assert } from 'chai'
import sinon from 'sinon'

import Alert from './Alert'

describe('<Alert/>', () => {
  it('should render an alert with a close button by default', () => {
    const wrapper = mount(<Alert color="success">Warning!</Alert>)
    assert.equal(
      wrapper.find('.alert.alert-success').length,
      1,
      'alert classes are attached'
    )
    assert.equal(
      wrapper.find('.alert[role="alert"]').length,
      1,
      'alert has correct aria role'
    )
    assert.equal(
      wrapper.find('.alert[aria-hidden="false"]').length,
      1,
      'alert is visible by default'
    )

    // Default close button
    assert.equal(wrapper.find('button').length, 1, 'close button is rendered')
    assert.equal(
      wrapper.find('svg.close[aria-label="close"]').length,
      1,
      'close button has correct aria label'
    )
  })

  it('should render the appropriate contextual color class', () => {
    const wrapper = mount(<Alert color="danger">Warning!</Alert>)
    assert.equal(
      wrapper.find('.alert.alert-danger').length,
      1,
      'alert contextual class is dependent on color'
    )
  })

  it('should not render a close button if not dismissable', () => {
    const wrapper = mount(
      <Alert color="danger" dismissable={false}>
        Warning!
      </Alert>
    )
    assert.equal(
      wrapper.find('button').length,
      0,
      'passing dismissable false suppresses the close button'
    )
  })

  it('should bind passed onDismiss to close button', () => {
    const onDismiss = sinon.spy()
    const wrapper = mount(
      <Alert color="danger" onDismiss={onDismiss}>
        Warning!
      </Alert>
    )
    wrapper.find('button').simulate('click')
    assert.ok(onDismiss.calledOnce)
    // Nothing else should happen to the alert
    assert.equal(
      wrapper.find('.alert.alert-danger').length,
      1,
      'alert is still rendered'
    )
    assert.equal(
      wrapper.find('.alert[aria-hidden="false"]').length,
      1,
      'alert is still default'
    )
    assert.equal(wrapper.find('button').length, 1, 'close button is still rendered')
  })
})
