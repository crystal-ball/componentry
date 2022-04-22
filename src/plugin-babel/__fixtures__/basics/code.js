import { Block, Flex, Grid, Text } from 'componentry'

export default function Test() {
  // Test that:
  // 1. Basic component transform works
  return (
    <Grid>
      <Flex p={2}>
        <Text variant='h3'>Precompiled for</Text>
      </Flex>
      <Block>SPEED</Block>
    </Grid>
  )
}
