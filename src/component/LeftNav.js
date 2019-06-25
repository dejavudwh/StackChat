import React from 'react';
import { Paper, Typography, IconButton, SvgIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  LeftNav: {
    float: 'left',
    margin: '0px 0px',
    padding: '8px 15px',
    width: 15,
    height: 564,
    backgroundColor: 'rgba(42, 42, 44)',
  },
  LogoText: {
    color: 'white',
    margin: '5px 5px',
    padding: '0px 0px',
  },
  IconList: {
    margin: '50px 0px',
    padding: '0px 0px',
  },
  IconButton: {
    margin: '0px',
    padding: '16px 0',
  },
};

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.changeLeft = props.onChangeLeft;
    this.changeRight = props.onChangeRight;
  }

  render() {
    return(
      <Paper className={this.props.classes.LeftNav} elevation="5" square="true">
        <Typography className={this.props.classes.LogoText} variant="body1">
          S<br /> T<br /> A<br /> C<br /> K
        </Typography>
        <div className={this.props.classes.IconList}>
          <IconButton id="information" className={this.props.classes.IconButton} size='small' onClick={this.changeLeft}>
            <SvgIcon id="information" htmlColor='white' > 
              <path id="information" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </SvgIcon>
          </IconButton>
          <IconButton id="address" className={this.props.classes.IconButton} size='small' onClick={this.changeLeft}>
            <SvgIcon id="address" htmlColor='white' > 
              <path id="address" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </SvgIcon>
          </IconButton>
          <IconButton id="recent" className={this.props.classes.IconButton} size='small' onClick={this.changeLeft}>
            <SvgIcon id="recent" htmlColor='white' > 
              <path id="recent" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </SvgIcon>
          </IconButton>
          <IconButton id="share" className={this.props.classes.IconButton} size='small' onClick={this.changeRight}>
            <SvgIcon id="share" htmlColor='white' > 
              <path id="share" d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"/>
            </SvgIcon>
          </IconButton>
          <IconButton id="fileShare" className={this.props.classes.IconButton} size='small' onClick={this.changeRight}>
            <SvgIcon id="fileShare" htmlColor='white' > 
              <path id="fileShare" d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
            </SvgIcon>
          </IconButton>
        </div>
      </Paper>
    );
  }
  
}

export default withStyles(styles)(LeftNav);