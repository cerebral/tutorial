import { state } from 'cerebral/proxy'
import { Context } from 'cerebral.proxy'

export const getItems =  ({ api }: Context) =>
  api.getItems().then(items => ({ items }))

export const getUser = ({ api, props }: Context) =>
  api.getUser(props.id).then(user => ({ user }))