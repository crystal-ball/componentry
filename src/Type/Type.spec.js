import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Anchor, Header, Text } from './Type'
import elementTests from '../utils-test/element-tests'

describe('<Anchor/>', () => {
  afterEach(cleanup)

  // Basic library element test suite
  elementTests(Anchor)

  test('should render type classes for anchor', () => {
    const { getByText } = render(
      <Anchor color='success' size='sm'>
        Link
      </Anchor>,
    )
    expect(getByText('Link')).toHaveClass('a a-success a-sm')
  })

  test('should render btn classes for button style anchor', () => {
    const { getByText } = render(
      <Anchor button color='success' size='sm'>
        Link
      </Anchor>,
    )
    expect(getByText('Link')).toHaveClass('btn btn-success btn-sm')
  })
})

describe('<Header/>', () => {
  afterEach(cleanup)
  // Basic library element test suite
  elementTests(Header)
})

describe('<Text/>', () => {
  afterEach(cleanup)
  // Basic library element test suite
  elementTests(Text)
})
