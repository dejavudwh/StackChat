import { connect } from 'react-redux'
import ChatBar from '../component/ChatBar'
import { changeInput } from '../actions/curChat'

const mapStateToProps = state => ({
  destChat: state.chat.dest,
  input: state.chat.input,
})

const mapDispatchToProps = dispatch => ({
  changInput: (event) => {
    dispatch(changeInput(event.target.value))
  },
})

const CharObj = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatBar)

export default CharObj
