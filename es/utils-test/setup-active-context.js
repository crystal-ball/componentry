/**
 * Any test that mounts the State Trigger or Content components will need to mock
 * the expected context created by `withState`. Use this factory to create context
 * for tests.
 */
export default (function () {
  return {
    context: {
      ACTIVE: {
        guid: 'test',
        getActive: function getActive() {
          return false;
        },
        activate: function activate() {},
        deactivate: function deactivate() {},
        subscribe: function subscribe() {}
      }
    }
  };
});