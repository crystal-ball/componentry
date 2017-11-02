/**
 * Any test that mounts the State Trigger or Content components will need to mock
 * the expected context created by `withState`. Use this factory to create context
 * for tests.
 */
export default () => ({
  context: {
    COMPONENTRY_ACTIVE: {
      guid: 'test',
      getActive() {
        return false
      },
      activate() {},
      deactivate() {},
      subscribe() {}
    }
  }
})
