import React from 'react';
import { browserHistory } from 'react-router';
import { 
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Container,
  Typography,
  SvgIcon,
  Grid,
  Link,
  Button,
  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SignupDialog from '../container/Signin.js'

const styles = {
  paper: {
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    margin: '8px',
    backgroundColor: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '8px',
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
    margin: '24px 0px 40px 0px',
  },
}

class SigninCmpt extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeSignup = this.changeSignup.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const path = '/home';
    browserHistory.push(path);
  };

  changeSignup() {
    this.props.onSignup();
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
      <SignupDialog />
      <CssBaseline />
      <div className={this.props.classes.paper}>
        <Avatar className={this.props.classes.avatar}>
          <SvgIcon htmlColor="white">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </SvgIcon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={this.props.classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name / Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.props.classes.submit}
            onClick={this.handleClick}
          >
            {"sign in"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={this.changeSignup}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SigninCmpt);