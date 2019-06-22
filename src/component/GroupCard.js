import React from 'react';
import { Card, CardActionArea, Avatar, CardActions, IconButton, Typography, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AvatarImg from '../static/images/avatar/1.jpg'

const useStyle = makeStyles(theme => ({
  card: {
    display: 'inline-block',
    margin: '5px 5px 15px 15px',
    width: 50,
    height: 100,
    backgroundColor: 'rgba(122, 197, 205)',
  },
  AvatarText: {
    textAlign: 'center',
  },
  Avatar: {
    margin: '1px 5px',
  },
}));

export default function GroupCard() {
  const classes = useStyle();

  return (
    <Card className={classes.card} raised="true">
      <CardActionArea>
        <Avatar alt="Z Sharp" src={AvatarImg} className={classes.Avatar}/>
        <Typography variant="body1" className={classes.AvatarText}>
          <b>Hazrd</b>
        </Typography>
      </CardActionArea>
      <CardActions>
        <IconButton size='small'>
          <SvgIcon htmlColor='white' > 
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </SvgIcon>
        </IconButton>
      </CardActions>
    </Card>
  )
};