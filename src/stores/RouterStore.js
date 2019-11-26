import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router';

class RouterStore extends BaseRouterStore {
  constructor(history) {
    super();
    if (history) {
      this.history = syncHistoryWithStore(history, this);
    }
  }
}

export default RouterStore;
