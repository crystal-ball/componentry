import { Badge, Block, Flex, Grid, Paper, Text } from 'componentry'

export default function Test() {
  // Test that:
  // 1. Basic component transform works
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
