<ComponentsList
  components={[
    "Drawer",
    "Drawer.Trigger",
    "Drawer.Content",
    "Accordion",
    "Accordion.Trigger",
    "Accordion.Content"
  ]}
/>

Toggle the visibility of content with the ability to include multiple elements
in an Accordion.

The Drawer component is essentially the same as a State component, it only
includes a few small styling additions. Having a distinct component for drawer
type UI elements enables layering on additional styles to easily create custom
drawers in an application without altering the utility of the base State
component.

<InteractiveDemo
  renderCode={() => `<Drawer>
  <Drawer.Trigger link>
    <Icon id="chevron" />
    Trigger Drawer
  </Drawer.Trigger>
  <Drawer.Content>
    The Motion Picture Academy refused to nominate Tron (1982) for a
    special-effects award because, according to director Steven Lisberger,
    “The Academy thought we cheated by using computers”
  </Drawer.Content>
</Drawer>`}
  renderComponent={() => (
    <div className="w-50">
      <Drawer>
        <Drawer.Trigger link>
          <Icon id="chevron" />
          Trigger Drawer
        </Drawer.Trigger>
        <Drawer.Content>
          The Motion Picture Academy refused to nominate Tron (1982) for a
          special-effects award because, according to director Steven Lisberger,
          “The Academy thought we cheated by using computers”
        </Drawer.Content>
      </Drawer>
    </div>
  )}
/>

## Accordion

Create accordions with linked activation triggers using the Accordion component.
Opening any drawer in an accordion will close all other drawers. The `activeId`
{' '}prop is required and must match between a set of trigger and content components
inside an accordion.

<InteractiveDemo
  renderCode={() => `<Accordion>
  <Accordion.Trigger activeId="one">Trigger One</Accordion.Trigger>
  <Accordion.Content activeId="one">Content One</Accordion.Content>
  <Accordion.Trigger activeId="two">Trigger Two</Accordion.Trigger>
  <Accordion.Content activeId="two">Content Two</Accordion.Content>
  <Accordion.Trigger activeId="three">Trigger Three</Accordion.Trigger>
  <Accordion.Content activeId="three">Content Three</Accordion.Content>
</Accordion>`}
  renderComponent={() => (
    <div className="w-50">
      <Accordion>
        <Accordion.Trigger activeId="one">Trigger One</Accordion.Trigger>
        <Accordion.Content activeId="one">Content One</Accordion.Content>
        <Accordion.Trigger activeId="two">Trigger Two</Accordion.Trigger>
        <Accordion.Content activeId="two">Content Two</Accordion.Content>
        <Accordion.Trigger activeId="three">Trigger Three</Accordion.Trigger>
        <Accordion.Content activeId="three">Content Three</Accordion.Content>
      </Accordion>
    </div>
  )}
/>

<PropsDocs activeComponent />
