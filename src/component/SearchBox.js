import React from 'react'
import { InputBase, IconButton, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(() => ({
  SearchInput: {
    display: 'inline-block',
    margin: '10px 10px',
    padding: '2px',
    width: 210,
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

export default function SearchBox(props) {
  const classes = useStyle()

  return (
    <div>
      <IconButton className={classes.IconButton} size="small">
        <SvgIcon htmlColor="black" fontSize="middle">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </SvgIcon>
      </IconButton>
      <InputBase className={classes.SearchInput} value={props.searchInput} onChange={props.onChangeSearchInput} />
      <IconButton className={classes.IconButton} size="small" onClick={props.handleAddFriend}>
        <SvgIcon htmlColor="black" fontSize="middle">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </SvgIcon>
      </IconButton>
    </div>
  )
}
