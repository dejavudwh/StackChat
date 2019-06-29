const initialState = {
    email: '',
    password: '',
}

const loginInfoChange = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  } else
   if(action.type === 'LOGIN_EMAIL_CHANGE') {
    return Object.assign({}, state, {
        email: action.value,
        password: state.password,
    })
  } else if(action.type === 'LOGIN_PWD_CHANGE') {
    return Object.assign({}, state, {
        email: state.email,
        password: action.value,
    })
  } else {
    return state;
  }
} 

export default loginInfoChange;