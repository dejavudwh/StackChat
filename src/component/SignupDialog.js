import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, TextField, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '400px',
    width: '350px',
    height: '500px',
  },
  form: {
    width: '100%',
    margin: '18px 10px 10px 10px',
  },
  submit: {
    margin: '18px 5px 20px 13px',
  },
}))

export default function SignupDialog(props) {
  const classes = useStyles();

  return (
    <Dialog className={classes.root} open={props.signup} >
      <Typography component="h1" variant="button" color="primary">
          Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          value={props.signupName}
          variant="outlined"
          margin="normal"
          required
          id="username"
          label="User Name"
          name="username"
          autoComplete="email"
          autoFocus
          onChange={props.SignUpNameChange}
        />
        <TextField
          value={props.signupEmail}
          variant="outlined"
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={props.SignUpEmailChange}
        />
        <TextField
          value={props.signupPwd}
          variant="outlined"
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={props.SignUpPwdChange}
        />
        <Button
          onClick={props.CloseSignup}
          // type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          {"sign in"}
        </Button>
        <Button
          onClick={props.SignUpUser}
          // type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {"sign up"}
        </Button>
      </form>
    </Dialog>
  )
}