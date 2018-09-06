<ComponentsList
  components={[
    "Dropdown",
    "Dropdown.Trigger",
    "Dropdown.Content",
    "Dropdown.Item"
  ]}
/>

Display menus, lists and more in a toggleable container.

Dropdowns can be used with any content, but are especially useful for displaying
content with multiple user interactions. The focus and keybinding handlers
enable easy navigation between multiple options.

<InteractiveDemo
  defaults={{ direction: null }}
  formFields={[
    { label: 'direction', options: [...this.props.directions, 'overlay'] },
  ]}
  renderCode={({ direction }) => `<Dropdown${direction ? ` direction="${direction}"` : ""}>
  <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
  <Dropdown.Content>
    <h4 className="dropdown-header">Available actions</h4>
    <Dropdown.Item>Interactive Item 1</Dropdown.Item>
    <Dropdown.Item>Interactive Item 2</Dropdown.Item>
    <div className="dropdown-divider" />
    <span className="dropdown-item-text">Dropdown item text is not interactive</span>
  </Dropdown.Content>
</Dropdown>`}
  renderComponent={({ direction }) => (
    <Dropdown direction={direction}>
      <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
      <Dropdown.Content>
        <h4 className="dropdown-header">Available actions</h4>
        <Dropdown.Item>Interactive Item 1</Dropdown.Item>
        <Dropdown.Item>Interactive Item 2</Dropdown.Item>
        <div className="dropdown-divider" />
        <span className="dropdown-item-text">Dropdown item text is not interactive</span>
      </Dropdown.Content>
    </Dropdown>
  )}
/>

<SupportingInfo
  classes={[
    'dropdown-toggle-split',
    'dropdown-menu-right',
    'dropdown-header',
    'dropdown-divider'
  ]}
  apis={['Active component', 'Items component', 'Directional component', 'Trigger decoration']}
/>

<Alert color="info">
  ℹ️ The Dropdown component defaults <code>direction</code> to
  <code>"bottom"</code>, so the <code>direction</code> prop is only required to
  override the default direction.
</Alert>

<PropsTabs activeComponent directionalComponent="bottom" />
