import componentry from './componentry'

describe('componentry()', () => {
  test('returns computed margin and padding values', () => {
    expect(componentry({ m: 5, p: 5 }).style).toEqual({ margin: 5, padding: 5 })
    expect(componentry({ mx: 5, px: 5 }).style).toEqual({
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 5,
      paddingRight: 5,
    })
    expect(componentry({ my: 5, py: 5 }).style).toEqual({
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 5,
      paddingBottom: 5,
    })
    expect(componentry({ mt: 5 }).style).toEqual({ marginTop: 5 })
    expect(componentry({ mr: 5 }).style).toEqual({ marginRight: 5 })
    expect(componentry({ mb: 5 }).style).toEqual({ marginBottom: 5 })
    expect(componentry({ ml: 5 }).style).toEqual({ marginLeft: 5 })
    expect(componentry({ pt: 5 }).style).toEqual({ paddingTop: 5 })
    expect(componentry({ pr: 5 }).style).toEqual({ paddingRight: 5 })
    expect(componentry({ pb: 5 }).style).toEqual({ paddingBottom: 5 })
    expect(componentry({ pl: 5 }).style).toEqual({ paddingLeft: 5 })
  })

  test('returns position util', () => {
    expect(componentry({ position: 'static' }).className['position-static']).toBeTruthy()
  })
})
