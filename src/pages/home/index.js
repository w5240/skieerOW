
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './stores';
import routes from './routes';
import './index.less';

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}></Router>
  </Provider>,
  document.getElementById('app')
);
