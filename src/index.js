import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import App from './component/App.js';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  ), document.getElementById('root'))