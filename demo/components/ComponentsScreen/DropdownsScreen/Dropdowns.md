<ComponentsList
  components={['Dropdown', 'Dropdown.Trigger', 'Dropdown.Content', 'Dropdown.Item']}
/>

<p className="lead">Dropdown component...</p>
<Dropdown>
  <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
  <Dropdown.Content>
    <h6 className="dropdown-header">Available actions</h6>
    <Dropdown.Item>Item 1</Dropdown.Item>
    <Dropdown.Item>Item 2</Dropdown.Item>
    <div className="dropdown-divider" />
    <Dropdown.Item>Item 3</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
