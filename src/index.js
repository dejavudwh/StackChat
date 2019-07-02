import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  Router, Route, browserHistory, IndexRoute,
} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './component/App'
import Login from './container/Login'
import Panel from './container/Panel'
import Reducer from './reducer/reducer'

const initialState = {
  register: {
    signup: false,
    signupUsername: '',
    signupEmail: '',
    signupPwd: '',
  },
  login: {
    email: '',
    password: '',
  },
}

const store = createStore(
  Reducer,
  // initialState,
  applyMiddleware(thunk),
)
const unsubscribe = store.subscribe(() => console.log(store.getState()))

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/home" component={Panel} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
