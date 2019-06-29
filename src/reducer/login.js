const initialState = {
  signinInfo: {
    email: '',
    password: '',
  }
}

const loginInfoChange = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  } else
   if(action.type === 'LOGIN_EMAIL_CHANGE') {
    return Object.assign({}, state, {
      signinInfo: {
        email: action.value,
        password: state.signinInfo.password,
      },
    })
  } else if(action.type === 'LOGIN_PWD_CHANGE') {
    return Object.assign({}, state, {
      signinInfo: {
        email: state.signinInfo.email,
        password: action.value,
      },
    })
  }
} 

export default loginInfoChange;