import React from 'react'
import { Paper, Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Scrollbars } from 'react-custom-scrollbars'

const styles = {
  root: {
    marginTop: '3px',
    width: '263px',
    height: '150px',
    backgroundColor: 'rgba(105, 105, 105)',
    textOverflow: 'ellipsis',
  },
  title: {
    fontSize: '18px',
    color: 'white',
    marginLeft: '15px',
  },
  notice: {
    fontSize: '15px',
    height: '30px',
    color: 'white',
    margin: '3px',
    backgroundColor: 'rgba(67, 205, 128)',
  },
}

class NotificationBar extends React.Component {
  componentDidMount() {
    this.props.receivesMessage()
  }

  handleClickFriend() {
    // alert('asd')
  }

  render() {
    const messageList = this.props.messageList.map((message, index) => (
      <Paper key={index} className={this.props.classes.notice} onClick={message.type === 'friend' ? this.handleClickFriend : ''}>
        <Typography align="center" variant="overline" component="h1">
          {message.value.substring(0, 28)}
        </Typography>
      </Paper>
    ))

    return (
      <Paper className={this.props.classes.root}>
        <Typography className={this.props.classes.title} variant="overline" component="h1">
          {'Notification'}
        </Typography>
        <Divider />
        <Scrollbars style={{ width: 266, height: 90 }}>
          {messageList}
        </Scrollbars>
      </Paper>
    )
  }
}

export default withStyles(styles)(NotificationBar)
