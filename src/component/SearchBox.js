import React from 'react'
import { InputBase, IconButton, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(() => ({
  SearchInput: {
    display: 'inline-block',
    margin: '10px 10px',
    padding: '2px',
    width: 200,
    height: 30,
    backgroundColor: 'rgba(205, 201, 201)',
    borderRadius: '5px',
  },
  IconButton: {
    marginLeft: '0px',
    padding: '0px',
    display: 'inline-block',
  },
}))

export default function SearchBox() {
  const classes = useStyle()

  return (
    <div>
      <IconButton className={classes.IconButton} size="small">
        <SvgIcon htmlColor="black" fontSize="small">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </SvgIcon>
      </IconButton>
      <InputBase className={classes.SearchInput} />
    </div>
  )
}
