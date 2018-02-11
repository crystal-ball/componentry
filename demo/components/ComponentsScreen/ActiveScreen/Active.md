<ComponentsList components={['Active', 'Active.Trigger', 'Active.Content']} />

Manage active state with a controllable component that has event hooks and
accessibility event handlers built in.

See the <Link to="/concepts/component-contract">Component APIs guide</Link> for
details on props conventions used for all library components with an active
state.

### Uncontrolled usage

By default the `Active` component internally manages its `active` state. Use the
`Trigger` and `Content` subcomponents to compose components in any way you need.

* The `Trigger` component handles calling `activate` and `deactivate` to update
  the component `active` state.
* The `Content` component uses the `active` component to show and hide content
  in the component.

<Card>
  <Card.Body>
    <Active>
      <Active.Trigger>Active Toggle</Active.Trigger>
      <Active.Content>
        <p>
          Content display toggled by the <code>Toggle</code> component.
        </p>
      </Active.Content>
    </Active>
  </Card.Body>
</Card>

<PrismHighlighter language="jsx">
{`<Active>
  <Active.Trigger>Active Toggle</Active.Trigger>
  <Active.Content>
    <p>
      Content display toggled by the <code>Toggle</code> component.
    </p>
  </Active.Content>
</Active>`}
</PrismHighlighter>

<PageBreak />

### FaCC usage

Active components can also be passed a function for the component's children
that will be called with the `activate` and `deactivate` state change handlers
as well as the current `active` state and `guid` of the component.

<PrismHighlighter language="jsx">
{`<Active>
  {({ active, activate, deactivate, guid }) => (
    <div>
      <Active.Trigger>{active ? 'Close' : 'Open'}</Active.Trigger>
      <Active.Content>Content</Active.Content>
    </div>
  )}
</Active>`}
</PrismHighlighter>

<PropsDocs activeComponent />
