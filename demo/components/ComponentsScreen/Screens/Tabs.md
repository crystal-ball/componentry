---
componentProps:
  - name: fill
    description: Toggles the fill style so that nav items fill the nav container based on their width.
    type: boolean
    defaultValue: "false"
  - name: justify
    description: Togles the justify styles so that nav items fill the nav container using an equal width.
    defaultValue: "false"
    type: boolean
---
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
  defaults={{ fill: false, justify: false }}
  formFields={[
    { label: 'fill', boolean: true },
    { label: 'justify', boolean: true }
  ]}
  renderCode={({ fill, justify }) => `<Tab defaultActive="one" className="w-100">
  <Tab.Nav${fill ? ' fill' : ''}${justify ? ' justify' : ''}>
    <Tab.Trigger activeId="one">Item 1</Tab.Trigger>
    <Tab.Trigger activeId="two">Tab with long name</Tab.Trigger>
    <Tab.Trigger activeId="three">Item 3</Tab.Trigger>
    <Tab.Trigger activeId="four" disabled>Disabled</Tab.Trigger>
  </Tab.Nav>
  <Tab.ContentContainer>
    <Tab.Content activeId="one">Tab 1</Tab.Content>
    <Tab.Content activeId="two">Tab 2</Tab.Content>
    <Tab.Content activeId="three">Tab 3</Tab.Content>
    <Tab.Content activeId="four">This tab has been disabled</Tab.Content>
  </Tab.ContentContainer>
</Tab>`}
  renderComponent={({ fill, justify }) => (
    <Tab defaultActive="one" className="w-100">
      <Tab.Nav fill={fill} justify={justify}>
        <Tab.Trigger activeId="one">Item 1</Tab.Trigger>
        <Tab.Trigger activeId="two">Tab with long name</Tab.Trigger>
        <Tab.Trigger activeId="three">Item 3</Tab.Trigger>
        <Tab.Trigger activeId="four" disabled>Disabled</Tab.Trigger>
      </Tab.Nav>
      <Tab.ContentContainer>
        <Tab.Content activeId="one">Tab 1</Tab.Content>
        <Tab.Content activeId="two">Tab 2</Tab.Content>
        <Tab.Content activeId="three">Tab 3</Tab.Content>
        <Tab.Content activeId="four">This tab has been disabled</Tab.Content>
      </Tab.ContentContainer>
    </Tab>
  )}
/>

<SupportingInfo apis={['Active component', 'Nav component']} />

<PropsTabs activeComponent componentProps={componentProps} />


