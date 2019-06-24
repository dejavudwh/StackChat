import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  TextField: {
    width: '510px',
    margin: '0px',
  },
}));

export default function ChatInputField() {
  const classes = useStyles();

  return (
    <TextField
      className={classes.TextField}
      label="Your message"
      Full-width
      variant="outlined"
      id="mui-theme-provider-outlined-input"

    />
  )
}