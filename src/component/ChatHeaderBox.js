import React from 'react'
import {
  Avatar, Typography, Divider, IconButton, SvgIcon,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AvatarImg from '../static/images/avatar/4.jpg'

const useStyle = makeStyles(() => ({
  root: {
    width: 500,
    height: 70,
    padding: '0px',
  },
  Avatar: {
    display: 'inline-block',
    margin: '10px 10px 5px 10px',
    width: '41px',
    height: '41px',
  },
  HeadName: {
    display: 'inline-block',
    position: 'absolute',
    // top: '15%',
    margin: '15px 10px 5px 20px',
    // top: '1%'
  },
  IconButton: {
    display: 'inline-block',
    position: 'absolute',
    margin: '0px 10px 10px 400px',
  },
}))

export default function ChatHeaderBox(props) {
  const classes = useStyle()
  console.log(props.title)
  return (
    <div className={classes.root}>
      <Avatar className={classes.Avatar} src={AvatarImg} />
      <div className={classes.HeadName}>
        <Typography align="left" variant="overline">
          {props.title}
        </Typography>
      </div>
      <IconButton className={classes.IconButton} size="medium">
        <SvgIcon htmlColor="red">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </SvgIcon>
      </IconButton>
      <Divider />
    </div>
  )
}
