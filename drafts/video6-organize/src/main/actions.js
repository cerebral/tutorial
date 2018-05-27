import { state } from 'cerebral/proxy'

export const getItems =  ({ api, get }) =>
  api.getItems(get(state.postsLimit)).then(items => ({ items }))

export const getUser = ({ api, props }) =>
  api.getUser(props.id).then(user => ({ user }))