import React from 'react'
import { render } from '@testing-library/react'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Drawer } from './Drawer'

describe('<Drawer />', () => {
  activationTests(Drawer, { name: 'drawer', testArias: ['controls', 'expanded'] })

  elementTests(Drawer)
  elementTests(Drawer.Action)
  elementTests(Drawer.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Drawer /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Drawer>
        <Drawer.Action>Action</Drawer.Action>
        <Drawer.Content>Content</Drawer.Content>
      </Drawer>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
