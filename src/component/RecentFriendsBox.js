import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FriendsList from './FriendsList'

const useStyle = makeStyles(() => ({
  root: {
    margin: '15px 0px 0px 0px',
    padding: '0px',
    width: 300,
    height: 315,
    backgroundColor: 'rgb(245, 245, 245)',
  },
}))

export default function RecentFriendsBox() {
  const classes = useStyle()

  return (
    <Paper className={classes.root}>
      <FriendsList />
    </Paper>
  )
}
