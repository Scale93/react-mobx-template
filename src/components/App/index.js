import React from 'react';
import { hot } from 'react-hot-loader';
import Helmet from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';
import { notFoundPage, pages } from 'src/pages';

import Root from 'src/components/Root';
import Layout from 'src/components/Layout';

import './style.less';

const menuEntries = [
  {
    key: 'reactmobxdashboard',
    name: 'ReactMobXDashboard',
    icon: 'project',
    pageKeys: ['dashboard'],
  },
  {
    key: 'reactmobx1',
    name: 'ReactMobX1',
    icon: 'audit',
    pageKeys: ['reactmobx1_1', 'reactmobx1_2', 'reactmobx1_3', 'reactmobx1_4'],
  },
  {
    key: 'reactmobx2',
    name: 'ReactMobX2',
    icon: 'solution',
    pageKeys: ['reactmobx2_1', 'reactmobx2_2', 'reactmobx2_3'],
  },
  {
    key: 'reactmobx3',
    name: 'ReactMobX3',
    icon: 'audit',
    pageKeys: ['reactmobx3_1', 'reactmobx3_2', 'reactmobx3_3'],
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    const { path } = this.props.match;

    this.siderNavEntries = menuEntries.map((entry) => {
      const entryPages = entry.pageKeys.map((pageKey) => pages[pageKey]).map((page) => ({
        name: page.name,
        path: `${path}${page.path}`,
        icon: page.icon,
      }));
      return {
        name: entry.name,
        title: entry.title,
        icon: entry.icon,
        pages: entryPages,
      };
    });
  }

  render() {
    const { path } = this.props.match;

    return (
      <Root>
        <Helmet titleTemplate="%s - React App" defaultTitle="React MobX Template">
          <meta name="description" content="ReactMobXTemplate" />
        </Helmet>
        <Layout siderNavEntries={this.siderNavEntries}>
          <Switch>
            <Redirect exact from={`${path}`} to={`${path}${pages['dashboard'].path}`} />
            <Route
              path={`${path}${pages['dashboard'].path}`}
              component={pages['dashboard'].component}
            />
            <Route
              path={`${path}${pages['reactmobx1_1'].path}`}
              component={pages['reactmobx1_1'].component}
            />
            <Route
              path={`${path}${pages['reactmobx1_2'].path}`}
              component={pages['reactmobx1_2'].component}
            />
            <Route
              path={`${path}${pages['reactmobx1_3'].path}`}
              component={pages['reactmobx1_3'].component}
            />
            <Route
              path={`${path}${pages['reactmobx1_4'].path}`}
              component={pages['reactmobx1_4'].component}
            />{' '}
            <Route
              path={`${path}${pages['reactmobx2_1'].path}`}
              component={pages['reactmobx2_1'].component}
            />{' '}
            <Route
              path={`${path}${pages['reactmobx2_2'].path}`}
              component={pages['reactmobx2_2'].component}
            />
            <Route
              path={`${path}${pages['reactmobx2_3'].path}`}
              component={pages['reactmobx2_3'].component}
            />
            <Route
              path={`${path}${pages['reactmobx3_1'].path}`}
              component={pages['reactmobx3_1'].component}
            />
            <Route
              path={`${path}${pages['reactmobx3_2'].path}`}
              component={pages['reactmobx3_2'].component}
            />
            <Route
              path={`${path}${pages['reactmobx3_3'].path}`}
              component={pages['reactmobx3_3'].component}
            />
            <Redirect to={notFoundPage.path} />
          </Switch>
        </Layout>
      </Root>
    );
  }
}

export default hot(module)(App);
