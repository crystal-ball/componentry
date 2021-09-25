import React from 'react'
import { render, screen } from '@testing-library/react'

import { activationTests } from '../test/activation-tests'
import { elementTests } from '../test/element-tests'
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
    render(
      <Drawer data-testid='drawer'>
        <Drawer.Action>Action</Drawer.Action>
        <Drawer.Content>Content</Drawer.Content>
      </Drawer>,
    )

    expect(screen.getByTestId('drawer')).toMatchSnapshot()
  })
})
