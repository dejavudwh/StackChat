import React from 'react';
import { Paper, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ShareBox from './ShareBox.js';
import Notification from './Notification.js'
import Control from './Control.js'

const styles = {
  root: {
    float: 'left',
    width: 263,
    height: 564,
    backgroundColor: 'rgba(255, 250, 250)',
    margin: '0px 0px',
    padding: '8px 0px',
  },
};

class Sidebar extends React.Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <ShareBox></ShareBox>
        <Divider></Divider>
        <Notification></Notification>
        <Control></Control>
      </Paper>
    );
  };
}

export default withStyles(styles)(Sidebar);