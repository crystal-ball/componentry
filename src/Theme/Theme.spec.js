import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { Theme, useTheme } from './Theme'

describe('useTheme()', () => {
  it('should return an empty object when no provider is present', () => {
    const { result } = renderHook(() => useTheme())

    expect(result.current).toStrictEqual({})
  })

  it('should return the entire theme object when no component name is passed', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => {
        return <Theme theme={{ Button: {} }}>{children}</Theme>
      },
    })

    expect(result.current).toStrictEqual({ Button: {} })
  })

  it('should return an empty object when no provider is provided', () => {
    const { result } = renderHook(() => useTheme('Flex'))

    expect(result.current).toStrictEqual({})
  })

  it('should return an empty object when no theme value is passed', () => {
    const { result } = renderHook(() => useTheme('Flex'), {
      wrapper: ({ children }) => {
        return <Theme theme={{ Button: {} }}>{children}</Theme>
      },
    })

    expect(result.current).toStrictEqual({})
  })
})
