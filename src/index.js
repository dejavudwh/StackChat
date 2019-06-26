import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App.js';
import Login from './component/Login.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Login} />
    </Route>
  </Router>
), document.getElementById('root'));