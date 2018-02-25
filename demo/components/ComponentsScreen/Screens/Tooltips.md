<ComponentsList
  components={['Tooltip', 'Tooltip.Trigger', 'Tooltip.Content']}
/>

Display additional details for an element on hover.

If you'd like Tooltips to look like anchors by default the `link` prop can be
defaulted to true for the Tooltip.Trigger component using the ThemeProvider.
See the <Link to={{ pathname: '/concepts/theming', state: { name: 'Theme Customization' }}}>
Theme customization guide</Link> for details.

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

<SupportingInfo apis={['Active component']} />

<PropsTabs activeComponent />
