/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import dt from './dt';
/**
 * Library default component requirment test suite.
 *
 * IMPORTANT NOTES
 * - Enzyme `find()` will find **EVERY** instance of a prop, this makes it difficult
 *   to assert on find lengths, because it will be variable for components with
 *   HOCs which is why we use `toBeTruthy` to only check that some instance of the
 *   expected element attr exists
 */

export default (function (TestComponent) {
  var enzymeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /*
   * Test that any html tag or component can be passed through the 'as' prop to
   * override the parent element the component renders
   */
  test('should render as specified html element or component', function () {
    // Create a component to validate that the TestComponent returns.
    var TestAs = function TestAs() {
      return /*#__PURE__*/React.createElement("section", null);
    };

    var wrapper = mount( /*#__PURE__*/React.createElement(TestComponent, {
      as: TestAs
    }), enzymeOptions);
    expect(wrapper.find(TestAs).length).toBeTruthy();
  });
  /*
   * All components should spread passed props on the parent container for max
   * customization
   */

  test('should pass through classnames and attributes', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(TestComponent, {
      className: "test-custom",
      "data-test": "test-custom"
    }), enzymeOptions);
    expect(wrapper.find('.test-custom').length).toBeTruthy();
    expect(wrapper.find(dt('test-custom')).length).toBeTruthy();
  });
});