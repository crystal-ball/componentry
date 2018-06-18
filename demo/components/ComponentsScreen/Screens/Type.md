<ComponentsList components={['Anchor', 'Header']} />

Create consistent typography elements.

<InteractiveDemo
  renderCode={() => `<Anchor href="#">Anchor element</Anchor>`}
  renderComponent={() => <Anchor href="#">Anchor element</Anchor>}
/>

<Header as="h2">Headers</Header>

<InteractiveDemo
  defaults={{ as: 'h2', subheader: false }}
  formFields={[
    { label: 'as', options: ['h1', 'h2', 'h3', 'h4', 'h5'] },
    { label: 'subheader', boolean: true },
  ]}
  renderCode={({ as, subheader }) => `<Header as="${as}"${subheader ? ' subheader' : ''}>Headers</Header>`}
  renderComponent={opts => <Header {...opts}>Headers</Header>}
/>
