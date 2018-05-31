import { state } from 'cerebral/proxy'

export const getposts =  ({ api }) =>
  api.getposts().then(posts => ({ posts }))

export const getUser = ({ api, props }) =>
  api.getUser(props.id).then(user => ({ user }))