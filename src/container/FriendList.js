import { connect } from 'react-redux'
import FriendsListCmpt from '../component/FriendsListCmpt'
import { socketFriends } from '../actions/friendlist'
import { changeDestSokcet } from '../actions/curChat'

const mapStateToProps = state => ({
  friendList: state.friends.list,
})

const mapDispatchToProps = dispatch => ({
  socketFriendList: () => {
    dispatch(socketFriends())
  },
  changeDestSocket: (email) => {
    dispatch(changeDestSokcet(email))
  },
})

const FriendList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendsListCmpt)

export default FriendList
