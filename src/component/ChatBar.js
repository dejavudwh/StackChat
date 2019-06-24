import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ChatHeaderBox from './ChatHeaderBox.js'
import { Scrollbars } from 'react-custom-scrollbars';
import Message from './Message.js';
import SelfMessage from './SelfMessage.js';
import ChatInputField from './ChatInputField.js';

const styles = {
  root: {
    backgroundColor: 'rgba(245, 245, 245)',
    float: 'left',
    width: 500,
    height: 564,
    margin: '0px 0px',
    padding: '8px 15px',
  }
};

class ChatBar extends React.Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <ChatHeaderBox />
        <Scrollbars style={{ width: 520, height: 435 }}>
          <Message />
          <SelfMessage />
          <SelfMessage />
          <SelfMessage />
          <Message />
          <Message />
        </Scrollbars>
        <ChatInputField></ChatInputField>
      </Paper>
    );
  };
}

export default withStyles(styles)(ChatBar);