import { renderHook } from '@testing-library/react-hooks'
import { ComponentryProvider, useCtxProps } from './Provider'

describe('useCtxProps()', () => {
  it('should return undefined when no Provider is present', () => {
    const { result } = renderHook(() => useCtxProps('Button'))

    expect(result.current).toBeUndefined()
  })

  it('should return an empty object when no value is configured for component', () => {
    const { result } = renderHook(() => useCtxProps('Flex'), {
      wrapper: ({ children }) => {
        return (
          <ComponentryProvider components={{ Button: { variant: 'filled' } }}>
            {children}
          </ComponentryProvider>
        )
      },
    })

    expect(result.current).toBeUndefined()
  })

  it('should return the prop values if present for component', () => {
    const { result } = renderHook(() => useCtxProps('Button'), {
      wrapper: ({ children }) => {
        return (
          <ComponentryProvider components={{ Button: { variant: 'filled' } }}>
            {children}
          </ComponentryProvider>
        )
      },
    })

    expect(result.current).toStrictEqual({ variant: 'filled' })
  })
})
