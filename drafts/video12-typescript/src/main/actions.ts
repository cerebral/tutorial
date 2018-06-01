import { state, Context } from 'app.proxy'

export const getPosts = ({ api }: Context) =>
  api.getPosts().then(posts => ({ posts }))

export const getUser = ({ api, props }: Context<{ id: string }>) =>
  api.getUser(props.id).then(user => ({ user }))