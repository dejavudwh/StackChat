import React from 'react';
import GroupCard from './GroupCard.js';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  RecentGroupBox: {
    margin: '0px',
    padding: '0px',
  }
}));

export default function RecentGroupBox() {
  const classes = useStyle();

  return (
    <div className={classes.RecentGroupBox}>
      <GroupCard></GroupCard>
      <GroupCard></GroupCard>
      <GroupCard></GroupCard>
    </div>
  );
};