import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    float: 'left',
    margin: '0px',
    padding: '8px 16px',
    width: 280,
    height: 564,
    backgroundColor: 'orange',
  },
}));

export default function InfoTable() {
  const classes = useStyle();

  return (
    <Paper className={classes.root} elevation="5" square="true">
      TODO InfoTable
    </Paper>
  );
}
