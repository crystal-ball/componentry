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
  <Card>
    <Card.Header>
      <Drawer.Trigger
        link
        className="d-flex justify-content-between w-100 align-items-center"
      >
        <span>Trigger Drawer</span>
        <Icon id="chevron" />
      </Drawer.Trigger>
    </Card.Header>
    <Drawer.Content>
    <Card.Body>
      The Motion Picture Academy refused to nominate Tron (1982) for a
      special-effects award because, according to director Steven Lisberger,
      “The Academy thought we cheated by using computers”
    </Card.Body>
    </Drawer.Content>
  </Card>
</Drawer>`}
  renderComponent={() => (
    <div className="w-50" style={{height: "160px"}}>
      <Drawer>
        <Card>
          <Card.Header>
            <Drawer.Trigger
              link
              className="d-flex justify-content-between w-100 align-items-center"
            >
              <span>Trigger Drawer</span>
              <Icon id="chevron" />
            </Drawer.Trigger>
          </Card.Header>
          <Drawer.Content>
          <Card.Body>
            The Motion Picture Academy refused to nominate Tron (1982) for a
            special-effects award because, according to director Steven Lisberger,
            “The Academy thought we cheated by using computers”
          </Card.Body>
          </Drawer.Content>
        </Card>
      </Drawer>
    </div>
  )}
/>

<SupportingInfo
  apis={['Active component', , 'Trigger decoration']}
/>

## Accordion

Create accordions with linked activation triggers using the Accordion component.
Opening any drawer in an accordion will close all other drawers. The `activeId`
{' '}prop is required and must match between a set of trigger and content components
inside an accordion.

<InteractiveDemo
  renderCode={() => `<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Trigger activeId="one" link>Trigger One</Accordion.Trigger>
    </Card.Header>
    <Accordion.Content as={Card.Body} activeId="one">
        Content One
    </Accordion.Content>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Trigger activeId="two" link>Trigger Two</Accordion.Trigger>
    </Card.Header>
    <Accordion.Content as={Card.Body} activeId="two">
        Content Two
    </Accordion.Content>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Trigger activeId="three" link>Trigger Three</Accordion.Trigger>
    </Card.Header>
    <Accordion.Content as={Card.Body} activeId="three">
        Content Three
    </Accordion.Content>
  </Card>
</Accordion>`}
  renderComponent={() => (
    <div className="w-50">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Trigger activeId="one" link>Trigger One</Accordion.Trigger>
          </Card.Header>
          <Accordion.Content as={Card.Body} activeId="one">
              Content One
          </Accordion.Content>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Trigger activeId="two" link>Trigger Two</Accordion.Trigger>
          </Card.Header>
          <Accordion.Content as={Card.Body} activeId="two">
              Content Two
          </Accordion.Content>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Trigger activeId="three" link>Trigger Three</Accordion.Trigger>
          </Card.Header>
          <Accordion.Content as={Card.Body} activeId="three">
              Content Three
          </Accordion.Content>
        </Card>
      </Accordion>
    </div>
  )}
/>

<PropsTabs activeComponent />
