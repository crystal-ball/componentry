<!-- TODO: remove wrapper div after inspirescript handles inline components -->

<div>
  <ComponentsList
    components={['Popover', 'Popover.Trigger', 'Popover.Content', 'Popover.Header', 'Popover.Body']}
  />
</div>

<p className="lead">Popover component...</p>
<Popover>
  <Popover.Trigger color="primary" outline>
    Popover Top
  </Popover.Trigger>
  <Popover.Content top>
    <Popover.Header>Fun Fact!</Popover.Header>
    <Popover.Body>
      The new Texas Instrument calculators have ABC keyboards because if
      they had QWERTY keyboards, they would be considered computers and
      wouldn’t be allowed for standardized test taking
    </Popover.Body>
  </Popover.Content>
</Popover>
<Popover>
  <Popover.Trigger color="primary" outline>
    Popover Right
  </Popover.Trigger>
  <Popover.Content right>
    <Popover.Header>Fun Fact!</Popover.Header>
    <Popover.Body>
      The new Texas Instrument calculators have ABC keyboards because if
      they had QWERTY keyboards, they would be considered computers and
      wouldn’t be allowed for standardized test taking
    </Popover.Body>
  </Popover.Content>
</Popover>
<Popover>
  <Popover.Trigger color="primary" outline>
    Popover Bottom
  </Popover.Trigger>
  <Popover.Content bottom>
    <Popover.Header>Fun Fact!</Popover.Header>
    <Popover.Body>
      The new Texas Instrument calculators have ABC keyboards because if
      they had QWERTY keyboards, they would be considered computers and
      wouldn’t be allowed for standardized test taking
    </Popover.Body>
  </Popover.Content>
</Popover>
<Popover>
  <Popover.Trigger color="primary" outline>
    Popover Left
  </Popover.Trigger>
  <Popover.Content left>
    <Popover.Header>Fun Fact!</Popover.Header>
    <Popover.Body>
      The new Texas Instrument calculators have ABC keyboards because if
      they had QWERTY keyboards, they would be considered computers and
      wouldn’t be allowed for standardized test taking
    </Popover.Body>
  </Popover.Content>
</Popover>
