import { connect } from 'react-redux'
import FriendsListCmpt from '../component/FriendsListCmpt'
import { socketFriends } from '../actions/friendlist'

const mapStateToProps = state => ({
  friendList: state.friends.list,
})

const mapDispatchToProps = dispatch => ({
  socketFriendList: () => {
    dispatch(socketFriends())
  },
})

const FriendList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendsListCmpt)

export default FriendList
