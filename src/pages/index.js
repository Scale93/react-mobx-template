import React from 'react';
import Loadable from 'react-loadable';

import App from 'src/components/App';
import NotFound from './NotFound';
import Loading from 'src/components/Loading';

const loginPage = {
  name: 'Login',
  path: '/login',
  component: Loadable({
    loader: () => import(/* webpackChunkName: "login" */ './Login'),
    loading: () => React.createElement('div', [], ['loading...']),
  }),
};

const notFoundPage = {
  name: 'Not Found',
  path: '/404',
  component: NotFound,
};

const appPage = {
  name: 'ReactMobXApp',
  path: '/app',
  component: App,
};

const pages = {
  dashboard: {
    name: 'ReactMobXDashboard',
    path: '/reactmobxdashboard',
    component: Loadable({
      loader: () => import('./ReactMobXDashboard'),
      loading: Loading,
    }),
    icon: 'dashboard',
  },
  reactmobx1_1: {
    name: 'ReactMobX1_1',
    path: '/reactmobx1_1',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'alert',
  },
  reactmobx1_2: {
    name: 'ReactMobX1_2',
    path: '/reactmobx1_2',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'thunderbolt',
  },
  reactmobx1_3: {
    name: 'ReactMobX1_3',
    path: '/reactmobx1_3',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'profile',
  },
  reactmobx1_4: {
    name: 'ReactMobX1_4',
    path: '/reactmobx1_4',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'file-sync',
  },
  reactmobx2_1: {
    name: 'ReactMobX2_1',
    path: '/reactmobx2_1',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'file-protect',
  },
  reactmobx2_2: {
    name: 'ReactMobX2_2',
    path: '/reactmobx2_2',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'team',
  },
  reactmobx2_3: {
    name: 'ReactMobX2_3',
    path: '/reactmobx2_3',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'team',
  },
  reactmobx3_1: {
    name: 'ReactMobX3_1',
    path: '/reactmobx3_1',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'dashboard',
  },
  reactmobx3_2: {
    name: 'ReactMobX3_2',
    path: '/reactmobx3_2',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'warning',
  },
  reactmobx3_3: {
    name: 'ReactMobX3_3',
    path: '/reactmobx3_3',
    component: Loadable({
      loader: () => import('./NotFound'),
      loading: Loading,
    }),
    icon: 'line-chart',
  },
};

export { loginPage, notFoundPage, appPage, pages };
