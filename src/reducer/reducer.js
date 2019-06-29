import registerChange from './register'
import loginInfoChange from './login'
import { combineReducers } from 'redux'

export default combineReducers({
  register: registerChange,
  login: loginInfoChange
});