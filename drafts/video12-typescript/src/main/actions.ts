import { state, Context } from 'cerebral.proxy'

export const getposts =  ({ api }: Context) =>
  api.getPosts().then(posts => ({ posts }))

export const getUser = ({ api, props }: Context<{ id: string }>) =>
  api.getUser(props.id).then(user => ({ user }))