import React from 'react';
import { Paper, Avatar, IconButton, SvgIcon, Card, CardHeader, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShareImg from '../static/images/avatar/1.jpg'

const useStyles = makeStyles(theme => ({
  root: {

  },
  avatar: {
    width: '30px',
    height: '30px',
  },
  card: {
    margin: '5px',
    width: '250px',
    height: '150px',
    fontSize: '10px',
  },
  CardHeader: {
    fontSize: '22px',
    height: '25px',
  }
}));

export default function ShareBox() {
  const classes = useStyles();

  return (
    <Paper>
      <Card className={classes.card}>
        <CardHeader
          className={classes.CardHeader}
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="Settings" size="small">
              <SvgIcon htmlColor="gray">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </SvgIcon>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={require('../static/images/avatar/1.jpg')}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <SvgIcon htmlColor='gray' > 
            <path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </SvgIcon>
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  )
}
