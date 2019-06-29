import { isCorrectName, isCorrectEmail } from '../static/js/CheckInput';
const { dialog } = require('electron').remote;

export const SignUpNameChange = (value) => ({
  type: 'SIGNUP_NAME_CHANGE',
  value: value,
})

export const SignUpEmailChange = (value) => ({
  type: 'SIGNUP_EMAIL_CHANGE',
  value: value,
})

export const SignUpPwdChange = (value) => ({
  type: 'SIGNUP_PWD_CHANGE',
  value: value,
})

export const  SignUpSuccess = () => ({
  type: 'SIGNUP_USER_SUCCESS',
  sign: false,
})

export const SignUpNameFail = () => ({
  type: 'SIGNUP_NAME_FAIL',
  sign: true,
})

export const SignUpServerFail = () => ({
  type: 'SIGNUP_SERVER_FAIL',
  sign: true,
})

const fetchSignUp = (username, email, password) => {
  const url = 'http://localhost:8008/api/signup';
  const data = {
    username: username,
    email: email,
    password: password,
  };
  console.log('fetch', data)
  return fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .then(response => console.log('Success:', response));
}

export const SignUpUser = () => {
  return (dispatch, getState) => {
    const username = getState().signUpForm.signupUsername;
    const email = getState().signUpForm.signupEmail;
    const password =getState().signUpForm.signupPwd;

    if(!isCorrectName(username) || !isCorrectEmail(email)) {
      dispatch(SignUpNameFail());
    } else {
      fetchSignUp(username, email, password)
      .then(() => {
        dispatch(SignUpSuccess())
      })
      .catch(() => {
        dialog.showMessageBox({
          title: '提示',
          message: 'Server error！'
        })
        dispatch(SignUpServerFail());
      })
    }
  }
}