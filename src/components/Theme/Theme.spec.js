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
        return <Theme theme={{ Button: { variant: 'primary' } }}>{children}</Theme>
      },
    })

    expect(result.current).toStrictEqual({ Button: { variant: 'primary' } })
  })

  it('should return an empty object when no theme value is present for component', () => {
    const { result } = renderHook(() => useTheme('Flex'), {
      wrapper: ({ children }) => {
        return <Theme theme={{ Button: { variant: 'primary' } }}>{children}</Theme>
      },
    })

    expect(result.current).toStrictEqual({})
  })

  it('should return the theme value if present for component', () => {
    const { result } = renderHook(() => useTheme('Button'), {
      wrapper: ({ children }) => {
        return <Theme theme={{ Button: { variant: 'primary' } }}>{children}</Theme>
      },
    })

    expect(result.current).toStrictEqual({ variant: 'primary' })
  })
})
