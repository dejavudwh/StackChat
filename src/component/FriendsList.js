import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import Avator1 from '../static/images/avatar/3.jpg';
import Avator2 from '../static/images/avatar/2.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: 275,
    padding: '0px',
    margin: '0px',
  },
  inline: {
    display: 'inline',
  },
  Item: {
    margin: '5px 0px',
    height: 70,
    width: 283,
    backgroundColor: 'rgba(238, 233, 233)',
    '&:hover': {
      backgroundColor: 'rgba(100, 149, 237)',
    }
  }
}));

function FriendList() {
  const classes = useStyles();

  const handleClick = function(e) {
    alert('ada')
  }

  return (
    <List className={classes.root}>
      <ListItem className={classes.Item} alignItems="flex-start" onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Avator1} />
        </ListItemAvatar>
        <ListItemText
          className={classes.Text}
          primary="Brunch this weekend?"
          secondary=" — I'll be in your neighborhood"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.Item} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Avator2} />
        </ListItemAvatar>
        <ListItemText
          className={classes.Text}
          primary="Summer BBQ"
          secondary=" — Wish I could com"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.Item} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          className={classes.Text}
          primary="Oui Oui"
          secondary=' — Do you have Paris recomm'
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.Item} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          className={classes.Text}
          primary="Oui Oui"
          secondary=' — Do you have Paris recomm'
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.Item} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          className={classes.Text}
          primary="Oui Oui"
          secondary=' — Do you have Paris recomm'
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.Item} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          className={classes.Text}
          primary="Oui Oui"
          secondary=' — Do you have Paris recomm'
        />
      </ListItem>
    </List>
  )
}

export default function FriendsList() {

  return (
    <div>
      <Scrollbars style={{ width: 294, height: 270 }}>
        <FriendList></FriendList>
      </Scrollbars>
    </div>
  );
}