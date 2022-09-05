import clsx from 'clsx'
import { Text } from 'componentry'

export default function Test({ className, success }) {
  return (
    <div>
      {/* ✓ String literal className is merged with library classes */}
      <Text className='string-literal-class' truncate>
        Static className test
      </Text>
      {/* ✓ Identifier expression is merged with clsx with library classes */}
      <Text className={className} truncate>
        Identifier expression className test
      </Text>
      {/* ✓ Call expression is merged with clsx with library classes */}
      <Text className={clsx(className, ['call-expression-class'])} truncate>
        Call expression className test
      </Text>
      {/* ✓ Conditional expression is merged with clsx with library classes */}
      {/* @remarks - Known bug where a conditional className like this case could result in 'undefined' as a className */}
      <Text className={success ? 'success-class' : undefined} truncate>
        Conditional expression className test
      </Text>
    </div>
  )
}
