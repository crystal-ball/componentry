import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ComponentryProvider, useThemeProps } from './Provider'

describe('useThemeProps()', () => {
  it('should return undefined when no Provider is present', () => {
    const { result } = renderHook(() => useThemeProps('Button'))

    expect(result.current).toBeUndefined()
  })

  it('should return an empty object when no value is configured for component', () => {
    const { result } = renderHook(() => useThemeProps('Flex'), {
      wrapper: ({ children }) => {
        return (
          <ComponentryProvider
            config={{ defaultProps: { Button: { variant: 'filled' } } }}
          >
            {children}
          </ComponentryProvider>
        )
      },
    })

    expect(result.current).toBeUndefined()
  })

  it('should return the prop values if present for component', () => {
    const { result } = renderHook(() => useThemeProps('Button'), {
      wrapper: ({ children }) => {
        return (
          <ComponentryProvider
            config={{ defaultProps: { Button: { variant: 'filled' } } }}
          >
            {children}
          </ComponentryProvider>
        )
      },
    })

    expect(result.current).toStrictEqual({ variant: 'filled' })
  })
})
