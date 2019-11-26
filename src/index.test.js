import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import AppRouter from 'src/router';
import configureStores from 'src/configureStores';

import 'src/assets/styles/theme.less';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
const stores = configureStores(history);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider {...stores}>
      <AppRouter history={history} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
