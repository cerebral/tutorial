import { state } from 'cerebral/proxy'

export const getposts =  ({ api, get }) =>
  api.getposts(get(state.postsLimit)).then(posts => ({ posts }))

export const getUser = ({ api, props }) =>
  api.getUser(props.id).then(user => ({ user }))