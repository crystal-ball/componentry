import { Flex, Text } from 'componentry'
import { Grid } from './custom-grid'
import { Paper } from '@/custom/componentry_path'

export default function Test() {
  // Test that:
  // 1. Componentry imports (Flex, Text) are compiled
  // 2. Non-Componentry imports (Grid) are ignored
  // 3. Custom import paths (Paper) can be configured
  return (
    <Flex>
      <Grid>
        <Text>Precompiled for speed</Text>
      </Grid>
      <Paper>
        <Text>Precompiled for speed</Text>
      </Paper>
    </Flex>
  )
}
