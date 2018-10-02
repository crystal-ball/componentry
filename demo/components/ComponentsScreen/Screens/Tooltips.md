<ComponentsList
  components={['Tooltip', 'Tooltip.Trigger', 'Tooltip.Content']}
/>

Display additional details for an element on hover.

<InteractiveDemo
  renderCode={() => `<Tooltip>
  <Tooltip.Trigger>Tooltip</Tooltip.Trigger>
  <Tooltip.Content>
    Only 8% of the world’s currency is physical money, the rest only exists
    on computers.
  </Tooltip.Content>
</Tooltip>`}
  renderComponent={() => (
    <Tooltip>
      <Tooltip.Trigger>Tooltip</Tooltip.Trigger>
      <Tooltip.Content>
        Only 8% of the world’s currency is physical money, the rest only exists
        on computers.
      </Tooltip.Content>
    </Tooltip>
  )}
/>

<SupportingInfo apis={['Active component', 'Trigger decoration']} />

<PropsTabs activeComponent />
