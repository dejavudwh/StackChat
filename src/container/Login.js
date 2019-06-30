import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import SigninCmpt from '../component/SigninCmpt'
import { onSignup, closeSignup } from '../actions/index'
import { loginEmailChange, loginPwdChange } from '../actions/login'

const mapStateToProps = state => ({
  signup: state.register.signup,
})

const mapDispatchToProps = dispatch => ({
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
  },
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninCmpt)

export default withRouter(Login)
