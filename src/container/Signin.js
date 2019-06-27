import { connect } from 'react-redux'
import SignupDialog from '../component/SignupDialog.js';
import { onSignup, closeSignup } from '../actions'

const mapStateToProps = (state) => ({
  signup: state.signup,
});

const mapDispatchToProps = (dispatch) => ({
  onSignup: () => {
    dispatch(onSignup())
  },
  closeSignup: () => {
    dispatch(closeSignup())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupDialog);

