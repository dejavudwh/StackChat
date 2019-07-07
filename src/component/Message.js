import React from 'react'
import { Avatar, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AvatarImg from '../static/images/avatar/4.jpg'

const useStyle = makeStyles(() => ({
  root: {
    marginBottom: '25px',
  },
  Avatar: {
    display: 'inline-block',
    width: '22px',
    height: '22px',
  },
  Content: {
    display: 'inline-block',
    width: '240px',
    marginLeft: '8px',
    padding: '5px',
    backgroundColor: 'rgba(30, 144, 255)',
    '& p': {
      fontSize: '15px',
      color: 'white',
      margin: '0px',
      padding: '1px',
    },
  },
}))

export default function Message(props) {
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Avatar className={classes.Avatar} src={AvatarImg} />
      <Paper className={classes.Content}>
        <Typography>
          <p>{props.value}</p>
        </Typography>
      </Paper>
    </div>
  )
}
