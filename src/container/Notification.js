import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NotificationBar from '../component/NotificationBar'
import { waitNotice, responseMessage } from '../actions/notice'

const mapStateToProps = state => ({
  messageList: state.notification.message,
})

const mapDispatchToProps = dispatch => ({
  receivesMessage: () => {
    dispatch(waitNotice())
  },
  responseMessage: (pick) => {
    dispatch(responseMessage(pick))
  },
})

const Notification = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationBar)

export default withRouter(Notification)
