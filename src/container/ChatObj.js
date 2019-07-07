import { connect } from 'react-redux'
import ChatBar from '../component/ChatBar'

const mapStateToProps = state => ({
  destChat: state.chat.dest,
})

const mapDispatchToProps = dispatch => ({
})

const CharObj = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatBar)

export default CharObj
