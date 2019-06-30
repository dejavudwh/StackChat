import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GroupCard from './GroupCard'

const useStyle = makeStyles(() => ({
  RecentGroupBox: {
    margin: '0px',
    padding: '0px',
  },
}))

export default function RecentGroupBox() {
  const classes = useStyle()

  return (
    <div className={classes.RecentGroupBox}>
      <GroupCard />
      <GroupCard />
      <GroupCard />
    </div>
  )
}
