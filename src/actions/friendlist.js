import { dispatch } from 'C:/Users/isHudw/AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/pairs'

export const updateList = data => ({
  type: 'NEW_MESSAGE',
  origin: data.origin,
  value: data.message,
})

export const socketFriends = () => (dispatch, getState) => {

}
