// @flow
import React from 'react'

import PrismHighlighter from 'components/universal/PrismHighlighter'

const renderAs = `<Card as="section">
  <Card.Boyd>
    The container for this card will be an HTML section element instead of a div.
  </Card.Boyd>
</Card>`

const color = `<Alert color="info">This alert will be use the info theme color.</Alert>`

const subcomponents = `<Tooltip>
  <Tooltip.Trigger>Trigger</Tooltip.Trigger>
  <Tooltip.Content>
    The Trigger and Content subcomponents are standard for all components with
    active state.
  </Tooltip.Content>
</Tooltip>`

const uncontrolled = `<Active>
  <Active.Trigger>Toggle</Active.Trigger>
  <Active.Content>I manage my own state.</Active.Content>
</Active>`

const observed = `<Active
  onActivate={this.doSomethingOnActivate}
  onActivated={this.doSomethingAfterActivation}
  onDeactivate={this.doSomethingOnDeactivate}
  onDeactivated={this.doSomethingAfterDeactivation}
>
  <Active.Trigger>Toggle</Active.Trigger>
  <Active.Content>I will let you know when my state changes.</Active.Content>
</State>`

const controlled = `<Active
  active={activeState}
  activate={this.handleActivationChangeEvents}
  deactivate={this.handleDeactivationChangeEvents}
>
  <Active.Trigger>Toggle</Active.Trigger>
  <Active.Content>I will follow the instructions you give me.</Active.Content>
</Active>`

export default () => (
  <div>
    <p className="lead">
      These APIs are avilable for customizing Componentry components. The APIs are
      consistent across components for predictability.
    </p>
    <h4>
      Specifying render element with <code>as</code>
    </h4>
    <p>
      All Componentry elements accept the <code>as</code> prop to specify a custom
      render element. It&apos;s possible to pass a component or html tag. Internally
      this prop is passed to the component <code>createElement</code> call.
    </p>
    <PrismHighlighter language="jsx">{renderAs}</PrismHighlighter>
    <h4>
      Specify theme color with <code>color</code>
    </h4>
    <p>
      Any component that is themeable uses the <code>color</code> prop to set the
      theme color.
    </p>
    <PrismHighlighter language="jsx">{color}</PrismHighlighter>
    <h4>
      <code>&lt;Trigger /&gt;</code> and <code>&lt;Content /&gt;</code>{' '}
      subcomponents
    </h4>
    <p>All components with active state use Trigger and Content subcomponents.</p>
    <PrismHighlighter language="jsx">{subcomponents}</PrismHighlighter>
    <h2>Active component control</h2>
    <p className="lead">
      All components with active state can be used in one, or a combination of,
      these three ways: Uncontrolled, Observed and Controlled.
    </p>
    <h4>Uncontrolled usage</h4>
    <p>
      Components are uncontrolled by default, the active state is managed by the
      component.
    </p>
    <PrismHighlighter language="jsx">{uncontrolled}</PrismHighlighter>
    <h4>Observed usage</h4>
    <p>Component state changes can be observed by passing on event handlers:</p>
    <ul>
      <li>
        <code>onActivate</code>
      </li>
      <li>
        <code>onActivated</code>
      </li>
      <li>
        <code>onDeactivate</code>
      </li>
      <li>
        <code>onDeactivated</code>
      </li>
    </ul>
    <PrismHighlighter language="jsx">{observed}</PrismHighlighter>
    <h4>Controlled usage</h4>
    <p>
      Components can be controlled by passing <code>active</code>,{' '}
      <code>activate</code> and <code>deactivate</code> props.
    </p>
    <PrismHighlighter language="jsx">{controlled}</PrismHighlighter>
  </div>
)
