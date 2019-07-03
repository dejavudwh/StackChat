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
    margin: '5px',
    backgroundColor: 'rgba(67, 205, 128)',
  },
}

class NotificationBar extends React.Component {
  componentDidMount() {
    this.props.receivesMessage()
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Typography className={this.props.classes.title} variant="overline" component="h1">
          {'Notification'}
        </Typography>
        <Divider />
        <Scrollbars style={{ width: 266, height: 90 }}>
          <Paper className={this.props.classes.notice}>
            <Typography align="center" variant="overline" component="h1">
              {'I love candy. I love cookies.'}
            </Typography>
          </Paper>
          <Paper className={this.props.classes.notice}>
            <Typography align="center" variant="overline" component="h1">
              {'I love cheesecake. I love ch'}
            </Typography>
          </Paper>
          <Paper className={this.props.classes.notice}>
            <Typography align="center" variant="overline" component="h1">
              {'I love cheesecake. I love ch'}
            </Typography>
          </Paper>
        </Scrollbars>
      </Paper>
    )
  }
}

export default withStyles(styles)(NotificationBar)
