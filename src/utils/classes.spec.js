import { actionClasses } from './classes'

describe('actionClasses()', () => {
  test('actionClasses returns computed className for passed options', () => {
    expect(
      actionClasses('btn', 'primary', {
        active: true,
        color: 'info',
        disabled: true,
        size: 'sm',
      }),
    ).toEqual('btn btn-primary btn-sm btn-color-info active disabled')
  })

  test('when no truthy values are passed, then only the base and variant are returned', () => {
    expect(actionClasses('btn', 'primary', {})).toEqual('btn btn-primary')
  })
})
