import { state } from 'cerebral'

export const getPosts = ({ api }) =>
  api.getPosts().then(posts => ({ posts }))

export const getUser = ({ api, props }) =>
  api.getUser(props.id).then(user => ({ user }))