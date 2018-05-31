import { set } from 'cerebral/factories'
import { state, props } from 'cerebral/proxy'
import * as actions from './actions'

export const openpostsPage =  [
  set(state.isLoadingposts, true),
  actions.getposts,
  set(state.posts, props.posts),
  set(state.isLoadingposts, false)
]

export const openUserModal = [
  set(state.userModal.id, props.id),
  set(state.userModal.show, true),
  set(state.isLoadingUser, true),
  actions.getUser,
  set(state.users[props.id], props.user),
  set(state.isLoadingUser, false),
]

export const closeUserModal = set(state.userModal.show, false)