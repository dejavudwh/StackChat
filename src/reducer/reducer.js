const initialState = {
  signup: false,
}

const changeSign = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  } else if(action.type === 'onSignup') {
    return Object.assign({}, state, {
      signup: action.sign,
    })
  } else if(action.type === 'closeSignup') {
    console.log(action.sign);
    return Object.assign({}, state, {
      signup: action.sign,
    })
  }
}

export default changeSign;