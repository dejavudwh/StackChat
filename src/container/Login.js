import { connect } from 'react-redux'
import SigninCmpt from '../component/SigninCmpt.js';
import { onSignup, closeSignup } from '../actions/index.js'
import { loginEmailChange, loginPwdChange } from '../actions/login.js'
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  signup: state.register.signUpForm.signup,
})

const mapDispatchToProps = (dispatch) => ({
  onSignup: () => {
    dispatch(onSignup())
  },
  closeSignup: () => {
    dispatch(closeSignup())
  },
  onChangeEmailInput: (event) => {
    dispatch(loginEmailChange(event.target.value))
  },
  onChangePwdInput: (event) => {
    dispatch(loginPwdChange(event.target.value))
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninCmpt);

export default withRouter(Login);