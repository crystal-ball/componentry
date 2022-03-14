import { merge } from './merge'

describe('merge()', () => {
  it('merges theme values', () => {
    const base = {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        background: '#fff',
        inverse: '#eff',
        gray: {
          100: '#eff2f3',
          200: '#d7dfe2',
        },
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
      borderWidth: {
        DEFAULT: '1px',
      },
    }

    const overrides = {
      colors: {
        gray: {
          200: '#333',
        },
      },
      fontWeight: {
        bold: 600,
      },
    }

    expect(merge(base, overrides)).toStrictEqual({
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        background: '#fff',
        inverse: '#eff',
        gray: {
          100: '#eff2f3',
          200: '#333',
        },
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 600,
      },
      borderWidth: {
        DEFAULT: '1px',
      },
    })
  })
})
