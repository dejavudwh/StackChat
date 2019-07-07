import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Scrollbars } from 'react-custom-scrollbars'
import ChatHeaderBox from './ChatHeaderBox'
import Message from './Message'
import SelfMessage from './SelfMessage'
import ChatInputField from './ChatInputField'

const styles = {
  root: {
    backgroundColor: 'rgba(245, 245, 245)',
    float: 'left',
    width: 500,
    height: 564,
    margin: '0px 0px',
    padding: '8px 15px',
  },
}

class ChatBar extends React.Component {
  componentDidMount() {
    this.props.socketMessgae()
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <ChatHeaderBox title={this.props.destChat} />
        <Scrollbars style={{ width: 520, height: 435 }}>
          <Message />
          <SelfMessage />
          <SelfMessage />
          <SelfMessage />
          <Message />
          <Message />
        </Scrollbars>
        <ChatInputField value={this.props.input} change={this.props.changInput} send={this.props.sendMessage} />
      </Paper>
    )
  }
}

export default withStyles(styles)(ChatBar)
