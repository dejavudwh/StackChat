import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MainPanel from '../component/MainPanel'
import { openSocket } from '../actions/socketswitch'

const mapStateToProps = state => ({
  socket: state.connect.socket,
  useremail: state.login.email,
})

const mapDispatchToProps = dispatch => ({
  openSocket: () => {
    dispatch(openSocket())
  },
})

const Panel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPanel)

export default withRouter(Panel)
