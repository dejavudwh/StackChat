import { connect } from 'react-redux'
import ChatBar from '../component/ChatBar'
import { changeInput, sendMessage, socketCharMessage } from '../actions/curChat'

const mapStateToProps = state => ({
  destChat: state.chat.dest,
  input: state.chat.input,
  messageList: state.chat.message,
})

const mapDispatchToProps = dispatch => ({
  changInput: (event) => {
    dispatch(changeInput(event.target.value))
  },
  sendMessage: () => {
    dispatch(sendMessage())
  },
  socketMessgae: () => {
    dispatch(socketCharMessage())
  },
})

const CharObj = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatBar)

export default CharObj
