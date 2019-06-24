import React from 'react';
import { TextField, Avatar, IconButton, SvgIcon, Card, CardHeader, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import ShareImg from '../static/images/share/1.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0px',
    padding: '0px',
    backgroundColor: 'rgba(255, 250, 250)',
  },
  avatar: {
    width: '30px',
    height: '30px',
  },
  card: {
    margin: '5px',
    width: '250px',
    height: '285px',
    fontSize: '8px',
    backgroundColor: 'rgba(255, 250, 250)',
  },
  media: {
    height: '85px',
  },
  CardHeader: {
    fontSize: '22px',
    height: '25px',
  },
  content: {
    margin: '0px',
    padding: '10px',
  },
  CardActions: {
    margin: '0px',
    padding: '0px',
  },
  IconButton: {
    margin: '0px 0px 8px 10px',
    padding: '0px',
  },
  title: {
    fontSize: '12px',
    marginLeft: '10px',
  },
  TextField: {
    width: '263px',
    marginTop: '5px',
  },
}));

export default function ShareBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="overline" component="h1">
        Share
      </Typography>
      <Scrollbars style={{ width: 266, height: 280 }}>
        <Card className={classes.card} raised>
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
            title="Shrimp"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={ShareImg}
          />
          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classes.CardActions}disableSpacing>
            <IconButton className={classes.IconButton}aria-label="Add to favorites">
              <SvgIcon htmlColor='gray' > 
              <path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </SvgIcon>
            </IconButton>
          </CardActions>
        </Card>
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
            title="Shrimp"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={ShareImg}
          />
          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classes.CardActions}disableSpacing>
            <IconButton className={classes.IconButton}aria-label="Add to favorites">
              <SvgIcon htmlColor='gray' > 
              <path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </SvgIcon>
            </IconButton>
          </CardActions>
        </Card>
      </Scrollbars>
      <TextField
        className={classes.TextField}
        label="Your share"
        Full-width
        variant="filled"
        id="mui-theme-provider-outlined-input"
      />
    </div>
  )
}
