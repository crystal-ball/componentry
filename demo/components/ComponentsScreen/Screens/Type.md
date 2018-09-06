<ComponentsList components={['Anchor', 'Header']} />

Create consistent typography elements.

<InteractiveDemo
  renderCode={() => `<Anchor href="#">Anchor element</Anchor>`}
  renderComponent={() => <Anchor href="#">Anchor element</Anchor>}
/>

<Header header="h2">Headers</Header>

<InteractiveDemo
  defaults={{ header: 'h1', muted: false }}
  formFields={[
    { label: 'header', options: ['h1', 'h2', 'h3', 'h4', 'h5'] },
    { label: 'muted', boolean: true },
  ]}
  renderCode={({ header, muted }) => `<Header header="${header}"${muted ? ' muted' : ''}>Headers</Header>`}
  renderComponent={opts => <Header {...opts}>Headers</Header>}
/>
