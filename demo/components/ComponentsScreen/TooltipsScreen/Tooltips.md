<ComponentsList
  components={['Tooltip', 'Tooltip.Trigger', 'Tooltip.Content']}
/>

<p className="lead">Tooltip component...</p>
<Tooltip>
  <Tooltip.Trigger>Tooltip</Tooltip.Trigger>
  <Tooltip.Content>
    Only 8% of the world’s currency is physical money, the rest only exists
    on computers.
  </Tooltip.Content>
</Tooltip>
<Tooltip
  Trigger="Tooltip"
  Content="Only 8%!"
/>
