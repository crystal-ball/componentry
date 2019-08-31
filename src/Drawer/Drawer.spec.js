import React from 'react'
import { render } from '@testing-library/react'

import Drawer from './Drawer'
import activationTestSuite from '../../test/activation-tests'
import elementTests from '../../test/element-tests'

describe('<Drawer />', () => {
  activationTestSuite(Drawer, { name: 'drawer', testArias: ['controls', 'expanded'] })

  elementTests(Drawer)
  elementTests(Drawer.Trigger)
  elementTests(Drawer.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Drawer /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Drawer>
        <Drawer.Trigger>Trigger</Drawer.Trigger>
        <Drawer.Content>Content</Drawer.Content>
      </Drawer>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
