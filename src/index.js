import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import AppRouter from 'src/router';
import configureStores from 'src/configureStores';
import registerServiceWorker from 'src/registerServiceWorker';

import 'src/themes/theme.less';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
const stores = configureStores(history);

ReactDOM.render(
  <Provider {...stores}>
    <LocaleProvider locale={enUS}>
      <AppRouter history={history} />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
