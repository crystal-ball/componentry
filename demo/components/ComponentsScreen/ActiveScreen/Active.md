<ComponentsList components={['Active', 'Active.Trigger', 'Active.Content']} />

Manage active state with a controllable component that has event hooks and
accessibility event handlers built in.

The `Active` component defines the APIs available for all Componentry components
with active state, so the patterns for using the `Active` component also apply
to Drawers, Dropdowns, Tooltips, Popovers, Alerts and Modals.

The consistent active component API is possible because all of the Componentry
active elements accomplish the same essential task: conditionally showing
content. The styles and some fo the finer implementaiton details are different
between elements, but the underlying API is consistent.

#### Design

The `Active` component is comprised of:

* The `Active` container component. This component manages the active state and
  the state change handlers. The active state and change handlers are mounted
  on context in the `Active` component so that subcomponents can access them
  without having to manually be wired together every time.
* The `Active.Trigger` subcomponent is responsible for calling the
  `activate` and `deactivate` change handlers to trigger `active` state changes
  in the parent `Active` component.
* The `Active.Content` subcomponent is responsible for conditionally displaying
  content using the current `active` state.

<InteractiveDemo
  defaults={{}}
  formFields={[]}
  renderCode={() => `<Active>
  <Active.Trigger>Active Toggle</Active.Trigger>
  <Active.Content>
    <p>
      Content display toggled by the <code>Toggle</code> component.
    </p>
  </Active.Content>
</Active>`}
  renderComponent={() => (
    <Active>
      <Active.Trigger>Active Toggle</Active.Trigger>
      <Active.Content>
        <p>
          Content display toggled by the <code>Toggle</code> component.
        </p>
      </Active.Content>
    </Active>
  )}
/>

#### FaCC usage

Active components can also be passed a function as the component's child
that will be called with the `activate` and `deactivate` state change handlers
as well as the current `active` state and `guid` of the component.

This allows access to the internals of the State component and is especially
useful for conditionally rendering content or passing state change handlers to
children components.

<InteractiveDemo
  defaults={{}}
  formFields={[]}
  renderCode={() => `<Active>
  {({ active, activate, deactivate, guid }) => (
    <div>
      <Active.Trigger>{active ? 'Close' : 'Open'}</Active.Trigger>
      <Active.Content>Content</Active.Content>
    </div>
  )}
</Active>`}
  renderComponent={() => (
    <Active>
      {({ active, activate, deactivate, guid }) => (
        <div>
          <Active.Trigger>{active ? 'Close' : 'Open'}</Active.Trigger>
          <Active.Content>Content</Active.Content>
        </div>
      )}
    </Active>
  )}
/>

<PropsDocs activeComponent />
