import React from 'react'
import {
  Avatar, Card, CardActionArea, Button, CardActions, Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Avatar1 from '../static/images/avatar/10.jpg'

const useStyle = makeStyles(() => ({
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
    backgroundColor: 'rgba(225, 223, 222)',
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
    width: '39px',
    height: '39px',
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
  },
}))

export default function GroupCard() {
  const classes = useStyle()
  const [text, setText] = React.useState('Hazrd')

  const handleClick = () => {
    setText('asdad')
  }

  return (
    <div className={classes.GroupCard}>
      <Avatar className={classes.Avatar} src={Avatar1} />
      <Card className={classes.card} onClick={handleClick}>
        <CardActionArea className={classes.CardActionArea}>
          <Typography variant="button" align="left" noWrap="true" className={classes.AvatarText}>
            {text}
          </Typography>
          <br />
          <Typography variant="overline" align="center" noWrap="false">
            {'0/3 people'}
          </Typography>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
          <Button
            className={classes.Button}
            style={{
              borderRadius: 10,
              backgroundColor: '#21b6ae',
            }}
            variant="contained"
            size="small"
          >
            {'message'}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
