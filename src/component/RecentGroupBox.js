import React from 'react';
import GroupCard from './GroupCard.js';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyle = makeStyles(theme => ({

}));

export default function RecentGroupBox() {
  const classes = useStyle();

  return (
    <div>
      <GroupCard></GroupCard>
      <GroupCard></GroupCard>
      <GroupCard></GroupCard>
    </div>
  );
};