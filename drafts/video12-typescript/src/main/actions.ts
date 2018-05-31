import { state } from 'cerebral/proxy'
import { Context } from 'cerebral.proxy'

export const getposts =  ({ api }: Context) =>
  api.getposts().then(posts => ({ posts }))

export const getUser = ({ api, props }: Context) =>
  api.getUser(props.id).then(user => ({ user }))