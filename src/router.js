import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { loginPage, appPage, notFoundPage, echartPage } from 'src/pages';

const RestrictedRoute = ({ component: Component, isLoggedIn, fallback, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: fallback,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path={'/'} render={() => <Redirect to={appPage.path} push />} />
      <Route exact path={loginPage.path} component={loginPage.component} />
      <Route exact path={notFoundPage.path} component={notFoundPage.component} />
      <Route exact path={echartPage.path} component={echartPage.component} />
      <RestrictedRoute
        isLoggedIn
        path={appPage.path}
        component={appPage.component}
        fallback={loginPage.path}
      />
      <Redirect to={notFoundPage.path} />
    </Switch>
  </Router>
);

export default AppRouter;
