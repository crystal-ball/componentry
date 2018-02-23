<ComponentsList
  components={[
    "Tab",
    "Tab.Trigger",
    "Tab.Content",
    "Tab.Nav",
    "Tab.ContentContainer"
  ]}
/>

Control display of sections of content or views using a navigation element.

The Tab component is composed from the Active and Nav components, with support
from the Active and Nav subcomponents. The `activeId` prop controls display of
multiple active components within the Active component, and the `activeId` used
by a trigger and content pane must match.

<InteractiveDemo
  renderCode={() => `<Tab defaultActive="one">
  <Tab.Nav className="mb-3">
    <Tab.Trigger activeId="one">Item 1</Tab.Trigger>
    <Tab.Trigger activeId="two">Item 2</Tab.Trigger>
    <Tab.Trigger activeId="three">Item 3</Tab.Trigger>
  </Tab.Nav>
  <Tab.ContentContainer>
    <Tab.Content activeId="one">Tab 1</Tab.Content>
    <Tab.Content activeId="two">Tab 2</Tab.Content>
    <Tab.Content activeId="three">Tab 3</Tab.Content>
  </Tab.ContentContainer>
</Tab>`}
  renderComponent={() => (
    <div className="w-50">
      <Tab defaultActive="one">
        <Tab.Nav className="mb-3">
          <Tab.Trigger activeId="one">Item 1</Tab.Trigger>
          <Tab.Trigger activeId="two">Item 2</Tab.Trigger>
          <Tab.Trigger activeId="three">Item 3</Tab.Trigger>
        </Tab.Nav>
        <Tab.ContentContainer>
          <Tab.Content activeId="one">Tab 1</Tab.Content>
          <Tab.Content activeId="two">Tab 2</Tab.Content>
          <Tab.Content activeId="three">Tab 3</Tab.Content>
        </Tab.ContentContainer>
      </Tab>
    </div>
  )}
/>

<PropsTabs activeComponent />


