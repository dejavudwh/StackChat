import { connect } from 'react-redux'
import FriendsListCmpt from '../component/FriendsListCmpt'

const mapStateToProps = state => ({
  signup: state.register.signup,
})

const mapDispatchToProps = dispatch => ({

})

const FriendList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendsListCmpt)

export default FriendList
