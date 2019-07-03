import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NotificationBar from '../component/NotificationBar'
import { waitNotice } from '../actions/notice'

const mapStateToProps = state => ({
  message: state.notification.message,
})

const mapDispatchToProps = dispatch => ({
  receivesMessage: () => {
    dispatch(waitNotice())
  },
})

const Notification = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationBar)

export default withRouter(Notification)
