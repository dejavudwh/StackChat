import React from 'react'
import { Paper, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ShareBox from './ShareBox'
import Notification from './Notification'
import Control from './Control'
import FileShareBox from './FileShareBox'

const styles = {
  root: {
    float: 'left',
    width: 263,
    height: 564,
    backgroundColor: 'rgba(255, 250, 250)',
    margin: '0px 0px',
    padding: '8px 0px',
  },
}

class Sidebar extends React.Component {
  render() {
    let share = <ShareBox />
    if (this.props.species === 'fileShare') {
      share = <FileShareBox />
    }

    return (
      <Paper className={this.props.classes.root}>
        {share}
        <Divider />
        <Notification />
        <Control />
      </Paper>
    )
  }
}

export default withStyles(styles)(Sidebar)
