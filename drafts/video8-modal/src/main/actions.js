import { state } from 'cerebral/proxy'

export const getItems =  ({ api }) =>
  api.getItems().then(items => ({ items }))

export const getUser = ({ api, props }) =>
  api.getUser(props.id).then(user => ({ user }))