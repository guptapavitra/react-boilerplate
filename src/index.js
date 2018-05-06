import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';
import App from './App';

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={createHistory()}>
        <App />
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'),
);
registerServiceWorker();
