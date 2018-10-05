<ComponentsList components={['Active', 'Active.Trigger', 'Active.Content']} />

Manage active state for an element.

The Active component defines the APIs available for all Componentry components
with active state, and is referred to as the active component API. The Drawer,
Dropdown, Tooltip, Popover, Alert and Modal components all use the active
component API.

<Alert color='info'>
  Componentry uses the same active component APIs throughout the library to
  abstract the shared behaviors of the elements; each conditionally shows
  content.
</Alert>

The Active component is comprised of:

* `Active` - The container component manages the active state and the state
  change handlers. The active state and change handlers are mounted on the
  context in the Active component so that subcomponents can access them from any
  level without having to manually be wired together.
* `Active.Trigger` - The Trigger subcomponent is responsible for calling the
  `activate` and `deactivate` change handlers to trigger `active` state changes
  in the parent Active component.
* `Active.Content` - The Content subcomponent is responsible for conditionally
  displaying content using the current `active` state.

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

Functions passed as children to an Active component will be called with the
{' '}`activate` and `deactivate` change handlers as well as the current `active`
{' '}state and the component `guid`. This enables exposing the API of the Active
component, useful for custom content or flag rendering.



<InteractiveDemo
  renderCode={() => `<Active>
  {({ active, activate, deactivate, guid }) => (
    <>
      <Active.Trigger>{active ? 'Close' : 'Open'}</Active.Trigger>
      <Active.Content>
        👍 Any of the Active component handlers can be accessed outside
        the component using this pattern.
      </Active.Content>
    </>
  )}
</Active>`}
  renderComponent={() => (
    <div className="w-100">
      <Active>
        {({ active, activate, deactivate, guid }) => (
          <>
            <Active.Trigger>{active ? 'Close' : 'Open'}</Active.Trigger>
            <Active.Content>
              👍 Any of the Active component handlers can be accessed outside
              the component using this pattern.
            </Active.Content>
          </>
        )}
      </Active>
    </div>
  )}
/>

<PropsTabs activeComponent />
