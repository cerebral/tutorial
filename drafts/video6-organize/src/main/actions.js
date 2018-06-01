import { state } from 'cerebral/proxy'

export const getPosts = ({ api, get }) =>
  api.getPosts(get(state.postsLimit)).then(posts => ({ posts }))

export const getUser = ({ api, props }) =>
  api.getUser(props.id).then(user => ({ user }))