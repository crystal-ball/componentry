import { actionClasses } from './classes'

describe('actionClasses()', () => {
  test('actionClasses returns computed className for passed options', () => {
    expect(
      actionClasses('btn', 'primary', {
        active: true,
        color: 'primary',
        disabled: true,
        outline: 'primary',
        size: 'sm',
      }),
    ).toEqual('btn btn-block btn-primary btn-outline-primary btn-sm active disabled')
  })

  test('when no truthy values are passed, then only the variant is returned', () => {
    expect(actionClasses('btn', 'primary', {})).toEqual('btn')
  })
})
