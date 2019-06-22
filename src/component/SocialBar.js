import React from 'react';
import { Paper, Chip, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from './SearchBox.js';
import RecentGroupBox from './RecentGroupBox.js';

const useStyle = makeStyles(theme => ({
  SocialBox: {
    // display: 'inline-block',
    float: 'left',
    margin: '0px',
    padding: '8px 16px',
    width: 210,
    height: 524,
    backgroundColor: 'rgba(245, 245, 245)'
  },
  chip: {
    height: '20px',
    margin: '5px 0px',
  }
}));

export default function Social() {
  const classes = useStyle();

  return (
    <Paper className={classes.SocialBox} elevation="5" square="true">
      <SearchBox ></SearchBox>
      <Chip
        icon={<SvgIcon>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </SvgIcon>}
        label="Recent Group"
        className={classes.chip}
      />
      <RecentGroupBox></RecentGroupBox>
    </Paper>
  );
}