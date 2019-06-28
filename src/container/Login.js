import { connect } from 'react-redux'
import SigninCmpt from '../component/SigninCmpt.js';
import { onSignup, closeSignup } from '../actions/index.js'
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  signup: state.signup,
})

const mapDispatchToProps = (dispatch) => ({
  onSignup: () => {
    dispatch(onSignup())
  },
  closeSignup: () => {
    dispatch(closeSignup())
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninCmpt);

export default withRouter(Login);