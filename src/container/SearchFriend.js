import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import SearchBox from '../component/SearchBox'
import { searchInputChange } from '../actions/friends'


const mapStateToProps = state => ({
  searchInput: state.search.input,
})

const mapDispatchToProps = dispatch => ({
  onChangeSearchInput: (event) => {
    dispatch(searchInputChange(event.target.value))
  },
})

const SearchFriends = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBox)

export default withRouter(SearchFriends)
