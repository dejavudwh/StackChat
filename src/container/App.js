import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import App from '../component/App'
import { openSocket } from '../actions/socketswitch'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  openSocket: () => {
    dispatch(openSocket())
  },
})

const Application = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

export default withRouter(Application)
