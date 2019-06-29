import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App.js';
import Login from './container/Login.js';
import MainPanel from './component/MainPanel.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Reducer from './reducer/reducer.js';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {
  signUpForm: {
    signup: false,
    signupUsername: '',
    signupEmail: '',
    signupPwd: '',
  },
  signinInfo: {
    email: '',
    password: '',
  }
}

const store = createStore(
  Reducer,
  // initialState,
  applyMiddleware(thunk)
);
const unsubscribe = store.subscribe(() => console.log(store.getState()));

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