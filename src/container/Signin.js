import { connect } from 'react-redux'
import SignupDialog from '../component/SignupDialog'
import { onSignup, closeSignup } from '../actions/index'
import {
  signUpNameChange, signUpEmailChange, signUpPwdChange, signUpUser,
} from '../actions/register'

const mapStateToProps = state => ({
  signup: state.register.signup,
  signupName: state.register.signupUsername,
  signupEmail: state.register.signupEmail,
  signupPwd: state.register.signupPwd,
})

const mapDispatchToProps = dispatch => ({
  OnSignup: () => {
    dispatch(onSignup())
  },
  CloseSignup: () => {
    dispatch(closeSignup())
  },
  SignUpNameChange: (event) => {
    dispatch(signUpNameChange(event.target.value))
  },
  SignUpEmailChange: (event) => {
    dispatch(signUpEmailChange(event.target.value))
  },
  SignUpPwdChange: (event) => {
    dispatch(signUpPwdChange(event.target.value))
  },
  SignUpUser: () => {
    dispatch(signUpUser())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupDialog)
