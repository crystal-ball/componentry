/**
 * @file TS types testing
 */

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef } from 'react'
import {
  Active,
  Alert,
  Badge,
  Block,
  Button,
  Card,
  Close,
  ComponentryProvider,
  Flex,
  Grid,
  Icon,
  IconButton,
  Link,
  Paper,
  Text,
  useTheme,
} from '..'

// --------------------------------------------------------
// THEME TYPES

// Verify that the theme value accessed with theme hook is typed
function ThemedComponent() {
  const theme = useTheme()
  return <div style={{ color: theme.colors.inverse }}>THEME</div>
}

// --------------------------------------------------------
// POLYMORPHIC TYPES

// Text defaults to p, which does not have htmlFor so there should be an error here:
const assertComponentAsProp = (
  <>
    {/* ✅ Rendering a "label" element should support htmlFor attribute */}
    <Text as='label' htmlFor='test'>
      Huzzah
    </Text>
    {/* @ts-expect-error -- ❌ Default "div" element does not support htmlFor attribute */}
    <Text htmlFor='test'>Oh no</Text>

    {/* ✅ TestAs supports a specialProp */}
    <Text as={TestAs} specialProp={100} />
    {/* @ts-expect-error -- ❌ TestAs component does not support htmlFor attribute */}
    <Text as={TestAs} htmlFor='test' />
    {/* @ts-expect-error -- ❌ TestAs component does not support children */}
    <Text as={TestAs}>Error</Text>
  </>
)

function TestAs({ specialProp }: { specialProp: number }): JSX.Element {
  return <div>Test passing component as {specialProp}</div>
}

// --------------------------------------------------------
// REFS

function TestRef() {
  const blockRef = useRef<HTMLDivElement>(null)
  const flexRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const preRef = useRef<HTMLPreElement>(null)

  return (
    <>
      <Block ref={blockRef}>w/Ref</Block>
      <Flex ref={flexRef}>w/Ref</Flex>
      <Grid ref={gridRef}>w/Ref</Grid>
      <Icon ref={svgRef} id='test' />

      {/* ✅ as type matches ref type */}
      <Block ref={preRef} as='pre'>
        pre block
      </Block>
      {/* @ts-expect-error -- ❌ ref type doesn't match default as type of div */}
      <Block ref={preRef}>pre block</Block>
    </>
  )
}

// --------------------------------------------------------
// COMPONENT TYPES

const provider = (
  <ComponentryProvider>
    <div>the app</div>
  </ComponentryProvider>
)

const testBlock = (
  <>
    <Block mt={4}>test block</Block>
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Block ohno>test block</Block>
  </>
)

const testButton = (
  <>
    <Button
      variant='filled'
      color='primary'
      size='small'
      startIcon={<Icon id='code' />}
      active
    >
      Click
    </Button>
    <Button href='https://componentry.design/'>Click</Button>
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Button ohno>Click</Button>
  </>
)

const testFlex = (
  <>
    <Flex justify='center' mt='px'>
      test flex
    </Flex>
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Flex ohno>test flex</Flex>
  </>
)

const testIcon = (
  <>
    <Icon id='test' className='rad' />
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Icon id='test' ohno />
  </>
)

const testIconButton = (
  <>
    <IconButton icon={<Icon id='test' className='rad' />} onClick={console.log} />
    <IconButton
      icon={<Icon id='test' className='rad' />}
      href='https://componentry.design'
    />
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <IconButton ohno />
  </>
)

const testGrid = (
  <>
    <Grid justify='center' gap={3}>
      test grid
    </Grid>
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Grid ohno>test grid</Grid>
  </>
)

const testLink = (
  <>
    <Link href='https://componentry.com'>Click</Link>
    <Link onClick={console.log}>Click</Link>
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Link ohno>Click</Link>
  </>
)

const testPaper = (
  <>
    <Paper variant='flat'>test paper</Paper>
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Paper ohno>test paper</Paper>
  </>
)

const testText = (
  <>
    <Text className='rad' id='test' textTransform='normal-case'>
      test text
    </Text>
    {/* @ts-expect-error -- ❌ invalid prop ohno */}
    <Text ohno>test flex</Text>
  </>
)

// --- EXPERIMENTAL

const testActive = (
  <Active defaultActive={false} onDeactivated={console.log}>
    <Active.Action>Rad</Active.Action>
    <Active.Content>Active</Active.Content>
  </Active>
)

const testAlert = (
  <Alert variant='filled' color='success'>
    Test alert
  </Alert>
)

const testBadge = <Badge variant='filled'>77</Badge>

const testCard = (
  <Card p={2} className='rad'>
    <Card.Body mt={1.5}>Works</Card.Body>
    <Card.Footer>Rad</Card.Footer>
  </Card>
)
const testClose = <Close onClick={() => console.log} />
