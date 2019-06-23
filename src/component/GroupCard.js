import React from 'react';
import { Avatar, Card, CardActionArea, Button, CardActions, IconButton, Typography, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AvatarImg from '../static/images/avatar/1.jpg';

const useStyle = makeStyles(theme => ({
  GroupCard: {
    display: 'inline-block',
    position: 'relative',
    margin: '15px 0px 0px 0px',
    padding: '10px 0px 0px 0px',
  },
  card: {
    margin: '0px 0px 11px 11px',
    padding: '0px',
    width: 82,
    height: 101,
    backgroundColor: 'rgba(238, 233, 233)',
  },
  AvatarText: {
    margin: '15px 5px',
  },
  Avatar: {
    display: 'float',
    position: 'absolute',
    fontSize: '10px',
    top: '-10px',
    left: '15px',
    margin: '1px 5px',
    width: '45px',
    height: '45px',
  },
  CardActionArea: {
    margin: '20px 0px 0px 0px',
  },
  CardActions: {
    margin: '0px',
    padding: '0px',
  },
  Button: {
    width: 82,
  }
}));

export default function GroupCard() {
  const classes = useStyle();
  const [text, setText] = React.useState('Hazrd')

  const handleClick = function(e) {
    setText('asdad');
  }

  return (
    <div className={classes.GroupCard}>
      <Avatar className={classes.Avatar} src={AvatarImg}></Avatar>
      <Card className={classes.card} onClick={handleClick}>
        <CardActionArea className={classes.CardActionArea}>
          <Typography variant="button" align='left' noWrap='true' className={classes.AvatarText}>
            {text}
          </Typography>
          <br />
          <Typography variant="overline" align='center' noWrap='false'>
            0/3 people
          </Typography>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
          <Button className={classes.Button} variant="contained" size="small" color="primary">
            message
          </Button>
        </CardActions>
      </Card>
    </div>
  )
};