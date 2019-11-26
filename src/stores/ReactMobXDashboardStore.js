import { action, observable } from 'mobx';
import { getDashboardTable } from 'src/api/reactMobXDashboardApi';

class ReactMobXDashboardStore {
  @observable state = 'pending';
  @observable dashboardTableData = [];

  @action
  getDashboardTable = () => {
    this.state = 'pending';
    getDashboardTable().then((data) => {
      this.state = 'done';
      this.dashboardTableData = data;
    }, (error) => (this.state = 'error'));
  };
}

export default ReactMobXDashboardStore;
