<ComponentsList components={['Active', 'Active.Trigger', 'Active.Content']} />

Manage active state with a controllable component that has built-in
accessibility and event hooks.

The Active component defines the APIs available for all Componentry components
with active state, and is referred to as the active component API. The Drawer,
Dropdown, Tooltip, Popover, Alert and Modal components all use the active
component API.

The consistent active component API is possible because all of the Componentry
active components accomplish the same essential task: conditionally showing
content. The styles and implementation details are different between components,
but the underlying API is consistent.

## Component design

The Active component is comprised of:

* **`Active` container component** - This component manages the active state and
  the state change handlers. The active state and change handlers are mounted on
  the context in the Active component so that subcomponents can access them
  from any level without having to manually be wired together every time.
* **`Active.Trigger` subcomponent** - The Trigger subcomponent is responsible
  for calling the `activate` and `deactivate` change handlers to trigger
  `active` state changes in the parent `Active` component.
* **`Active.Content` subcomponent** - The Content subcomponent is responsible
  for conditionally displaying content using the current `active` state.

<InteractiveDemo
  defaults={{}}
  formFields={[]}
  renderCode={() => `<Active>
  <Active.Trigger>Active Trigger</Active.Trigger>
  <Active.Content>
    Content display toggled by the <code>Trigger</code> component.
  </Active.Content>
</Active>`}
  renderComponent={() => (
    <div className="w-100">
      <Active>
        <Active.Trigger>Active Trigger</Active.Trigger>
        <Active.Content>
          Content display toggled by the <code>Trigger</code> component.
        </Active.Content>
      </Active>
    </div>
  )}
/>

## FaCC usage

Active components can also be passed a function as the component's child
that will be called with the `activate` and `deactivate` state change handlers
as well as the current `active` state and `guid` of the component.

This allows access to the internals of the State component and is especially
useful for conditionally rendering content or passing state change handlers to
children components.

<InteractiveDemo
  renderCode={() => `<Active>
  {({ active, activate, deactivate, guid }) => (
    <Fragment>
      <Active.Trigger>{active ? 'Close' : 'Open'}</Active.Trigger>
      <Active.Content>
        👍 Any of the Active component handlers can be accessed outside
        the component using this pattern.
      </Active.Content>
    </Fragment>
  )}
</Active>`}
  renderComponent={() => (
    <div className="w-100">
      <Active>
        {({ active, activate, deactivate, guid }) => (
          <Fragment>
            <Active.Trigger>{active ? 'Close' : 'Open'}</Active.Trigger>
            <Active.Content>
              👍 Any of the Active component handlers can be accessed outside
              the component using this pattern.
            </Active.Content>
          </Fragment>
        )}
      </Active>
    </div>
  )}
/>

<PropsTabs activeComponent />
