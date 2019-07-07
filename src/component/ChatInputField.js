import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  TextField: {
    width: '420px',
    margin: '0px',
    marginRight: '5px',
  },
  button: {
    height: '55px',
  },
}))

export default function ChatInputField(props) {
  const classes = useStyles()

  return (
    <div>
      <TextField
        className={classes.TextField}
        label="Your message"
        variant="outlined"
        id="mui-theme-provider-outlined-input"
        value={props.value}
        onChange={props.change}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        {'SEND'}
      </Button>
    </div>
  )
}
