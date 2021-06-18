const babel = require('@babel/core')
const plugin = require('./plugin')

describe('componentryPlugin()', () => {
  it.todo('transforms jsx expression containers')

  it('transforms components to HTML elements', () => {
    const input = `
function Demo() {
  return (
    <Flex direction="column" justify="center">
      <Text variant="heading-1">Componentry</Text>
      <Text>Precompile testing snapshot</Text>
    </Flex>
  )
}
`

    const transformed = babel.transformSync(input, {
      filename: 'test.js',
      presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      plugins: [plugin],
    })

    expect(transformed?.code).toMatchSnapshot()
  })

  it('does not transform components with spread parameters', () => {
    const input = `
    function Demo({ ...rest }) {
      return (
        <Flex {...rest}>
          Spread Parameters
        </Flex>
      )
    }
    `

    const transformed = babel.transformSync(input, {
      filename: 'test.js',
      presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      plugins: [plugin],
    })

    expect(transformed?.code).toMatchSnapshot()
  })
})
