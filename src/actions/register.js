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
    fetchSignUp(getState().signUpForm.signupUsername, getState().signUpForm.signupEmail, getState().signUpForm.signupPwd)
    .then(res => {
      dispatch({
        type: 'SIGNUP_USER',
        sign: false,
      })
    })
  }
}