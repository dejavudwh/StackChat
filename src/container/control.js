import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ControlSmpt from '../component/ControlCmpt'
import { closeSocket } from '../actions/controlWin'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  closeWindow: () => {
    dispatch(closeSocket())
  },
})

const Control = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlSmpt)

export default withRouter(Control)
