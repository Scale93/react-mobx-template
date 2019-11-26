import { REACT_MOBX_DASHBOARD_STORE } from 'src/constants';
import ReactMobXDashboardStore from './stores/ReactMobXDashboardStore';
import RouterStore from './stores/RouterStore';
import { ROUTER_STORE } from './constants';

export default function configureStores(history) {
  const reactMobXDashboardStore = new ReactMobXDashboardStore();
  const routerStore = new RouterStore(history);

  const mobxStores = {
    [ROUTER_STORE]: routerStore,
    [REACT_MOBX_DASHBOARD_STORE]: reactMobXDashboardStore,
  };
  const mstStores = {};
  return { ...mobxStores, ...mstStores };
}
