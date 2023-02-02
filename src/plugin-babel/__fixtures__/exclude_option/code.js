import { Badge, Block, Flex, Grid, Paper, Text } from 'componentry'

export default function Test() {
  // Test that:
  // 1. exclude config skips pre-compiling
  return (
    <Paper>
      <Grid>
        <Flex>
          <Text>Precompiled for</Text>
        </Flex>
        <Block>SPEED</Block>
        <Badge>Delightful</Badge>
      </Grid>
    </Paper>
  )
}
