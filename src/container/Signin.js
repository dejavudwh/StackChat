import { connect } from 'react-redux'
import SignupDialog from '../component/SignupDialog.js';
import { onSignup, closeSignup } from '../actions/index.js'
import { SignUpNameChange, SignUpEmailChange, SignUpPwdChange, SignUpUser} from '../actions/register.js'

const mapStateToProps = (state) => ({
  signup: state.register.signup,
  signupName: state.register.signupUsername,
  signupEmail: state.register.signupEmail,
  signupPwd: state.register.signupPwd,
});

const mapDispatchToProps = (dispatch) => ({
  OnSignup: () => {
    dispatch(onSignup())
  },
  CloseSignup: () => {
    dispatch(closeSignup())
  },
  SignUpNameChange: (event) => {
    dispatch(SignUpNameChange(event.target.value))
  },
  SignUpEmailChange: (event) => {
    dispatch(SignUpEmailChange(event.target.value))
  },
  SignUpPwdChange: (event) => {
    dispatch(SignUpPwdChange(event.target.value))
  },
  SignUpUser: () => {
    dispatch(SignUpUser())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupDialog);

