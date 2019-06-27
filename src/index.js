import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App.js';
import Login from './container/Login.js';
import MainPanel from './component/MainPanel.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Reducer from './reducer/reducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducer);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/home" component={MainPanel} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));