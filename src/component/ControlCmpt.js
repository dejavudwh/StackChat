import React from 'react'
import { Paper, IconButton, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { browserHistory } from 'react-router'

const useStyles = makeStyles(() => ({
  root: {
    width: '263px',
    height: '45px',
    backgroundColor: 'rgba(255, 245, 238)',
    marginTop: '5px',
  },
  IconButton: {
    marginLeft: '18px',
    marginRight: '18px',
  },
}))

export default function ControlCmpt(props) {
  const classes = useStyles()

  const handleClick = (e) => {
    e.preventDefault()
    const path = '/'
    browserHistory.push(path)
  }

  return (
    <Paper className={classes.root} elevation="0" square>

      <div>
        <IconButton className={classes.IconButton} size="medium" onClick={handleClick}>
          <SvgIcon htmlColor="red">
            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
          </SvgIcon>
        </IconButton>
        <IconButton className={classes.IconButton} size="medium">
          <SvgIcon htmlColor="red">
            <path d="M3 3h18v2H3z" />
          </SvgIcon>
        </IconButton>
        <IconButton className={classes.IconButton} size="medium" onClick={props.closeWindow}>
          <SvgIcon htmlColor="red">
            <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
          </SvgIcon>
        </IconButton>
      </div>
    </Paper>
  )
}
