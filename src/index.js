import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App.js';
import Login from './component/Login.js';
import MainPanel from './component/MainPanel.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/home" component={MainPanel} />
    </Route>
  </Router>
), document.getElementById('root'));