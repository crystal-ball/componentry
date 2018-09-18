// import React from 'react'
// import { mount, render } from 'enzyme'

import { Anchor, Header, Text } from './Type'
import elementTests from '../utils-test/element-tests'

describe('<Anchor/>', () => {
  // Basic library element test suite
  elementTests(Anchor)
})

describe('<Header/>', () => {
  // Basic library element test suite
  elementTests(Header)
})

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)
})
