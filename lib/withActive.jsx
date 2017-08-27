
class ContextActive {
  subscriptions = []
  constructor(active) {
    this.active = active
  }

  setActive(active) {
    this.active = active
    this.subscriptions.forEach(subscription => subscription())
  }

  subscribe(subscriber) {
    this.subscriptions.push(subscriber)
  }
}

// update theme whenever needed. This propagate changes to subscribed components
componentWillReceiveProps(next) {
  this.contextActive.setActive(next.active)
}
