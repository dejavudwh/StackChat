import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ShareBox from './ShareBox.js';

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
      </Paper>
    );
  };
}

export default withStyles(styles)(Sidebar);