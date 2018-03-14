<ComponentsList
  components={[
    "Popover",
    "Popover.Trigger",
    "Popover.Content",
    "Popover.Header",
    "Popover.Body"
  ]}
/>

Reveal large amounts of HTML enabled content using a hoverable trigger.

Popovers make it possible to display any length of content on hover. Popovers
display can also be used for displaying HTML, making them especially useful for
showing detailed user hints on hover.

<InteractiveDemo
  defaults={{ direction: null }}
  formFields={[
    { label: 'direction', options: this.props.directions },
  ]}
  renderCode={({ direction }) => `<Popover${direction ? ` direction="${direction}"` : ""}>
  <Popover.Trigger>
    Popover Top
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Header>Fun Fact!</Popover.Header>
    <Popover.Body>
      <span>
        The new Texas Instrument calculators have ABC keyboards because if
        they had QWERTY keyboards, they would be considered computers and
        wouldn’t be allowed for standardized test taking.
      </span>
      <hr />
      <img
        src="https://media.giphy.com/media/KVUhxQAqrAV3i/giphy.gif"
        className="img-fluid"
        alt="that's awesome"
      />
    </Popover.Body>
  </Popover.Content>
</Popover>`}
  renderComponent={({ direction }) => (
    <Popover direction={direction}>
      <Popover.Trigger>
        Popover Trigger
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header>Fun Fact!</Popover.Header>
        <Popover.Body>
          <span>
            The new Texas Instrument calculators have ABC keyboards because if
            they had QWERTY keyboards, they would be considered computers and
            wouldn’t be allowed for standardized test taking.
          </span>
          <hr />
          <img
            src="https://media.giphy.com/media/KVUhxQAqrAV3i/giphy.gif"
            className="img-fluid"
            alt="that's awesome"
          />
        </Popover.Body>
      </Popover.Content>
    </Popover>
  )}
/>

<SupportingInfo apis={['Active component', 'Directional component', 'Trigger decoration']} />

<Alert color="info">
  ℹ️ The Popover component defaults <code>direction</code> to
  <code>"right"</code>, so the <code>direction</code> prop is only required to
  override the default direction.
</Alert>

<PropsTabs activeComponent directionalComponent="right" />
