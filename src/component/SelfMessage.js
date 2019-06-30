import React from 'react'
import { Avatar, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AvatarImg from '../static/images/avatar/5.jpg'

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '25px',
    marginLeft: '224px',
  },
  Avatar: {
    display: 'inline-block',
    width: '22px',
    height: '22px',
  },
  Content: {
    display: 'inline-block',
    width: '240px',
    marginRight: '8px',
    padding: '5px',
    backgroundColor: 'white',
    '& p': {
      fontSize: '15px',
      color: 'gray',
      margin: '0px',
      padding: '1px',
    },
  },
}))

export default function Message() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.Content}>
        <Typography>
          <p>Life s but a walking shadow, a poor player.</p>
        </Typography>
      </Paper>
      <Avatar className={classes.Avatar} src={AvatarImg} />
    </div>
  )
}
