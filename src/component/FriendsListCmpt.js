import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Badge, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, SvgIcon, IconButton,
} from '@material-ui/core'
import Avator1 from '../static/images/avatar/3.jpg'
import Avator2 from '../static/images/avatar/2.jpg'
import Avator6 from '../static/images/avatar/6.jpg'
import Avator7 from '../static/images/avatar/7.jpg'
import Avator8 from '../static/images/avatar/8.jpg'

const styles = {
  root: {
    width: 275,
    // height: 315,
    padding: '0px',
    margin: '0px',
  },
  inline: {
    display: 'inline',
  },
  Item: {
    margin: '5px 0px',
    height: 70,
    width: 280,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'rgba(100, 149, 237)',
    },
  },
}

const MesBadge = withStyles(theme => ({
  badge: {
    top: '18%',
    right: 270,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
}))(Badge)

class FriendsListCmpt extends React.Component {
  componentDidMount() {
    this.props.socketFriendList()
    console.log('friendList', this.props.friendList)
  }

  handleClick = (email) => {
    this.props.changeDestSocket(email)
  }

  render() {
    const friendList = this.props.friendList.map((item, index) => (
      <MesBadge key={index} className={this.props.classes.Badeg} badgeContent={6} color="secondary" onClick={() => { this.handleClick(item.useremail) }}>
        <ListItem className={this.props.classes.Item} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={Avator1} />
          </ListItemAvatar>
          <ListItemText
            className={this.props.classes.Text}
            primary={item.useremail}
            secondary=" — I'll be in your neighbo"
          />
          <IconButton size="medium" edge="end">
            <SvgIcon htmlColor="green">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
            </SvgIcon>
          </IconButton>
        </ListItem>
      </MesBadge>
    ))

    return (
      <Scrollbars style={{ width: 294, height: 311 }}>
        <List className={this.props.classes.root}>
          {friendList}
        </List>
      </Scrollbars>
    )
  }
}

export default withStyles(styles)(FriendsListCmpt)
