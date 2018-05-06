import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import createHistory from 'history/createBrowserHistory'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={createHistory()}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
