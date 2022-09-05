import { Block, Flex, Grid, Paper, Text } from 'componentry'

export default function Test() {
  // Test that:
  // 1. Individual component props are transformed correctly
  return (
    <div>
      <Block>Test Block component</Block>
      <Flex align='center' direction='column' justify='center' wrap='wrap'>
        Test Flex component
      </Flex>
      <Grid align='center' justify='center'>
        Test Grid component
      </Grid>
      <Text variant='h1' truncate>
        Test Text component
      </Text>
      <Paper variant='modal'>Test Paper component</Paper>
    </div>
  )
}
