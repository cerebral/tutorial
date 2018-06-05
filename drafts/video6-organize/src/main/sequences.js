import { state, props } from 'cerebral'
import { set } from 'cerebral/factories'
import * as actions from './actions'

export const openPostsPage =  [
  set(state.isLoadingPosts, true),
  actions.getPosts,
  set(state.posts, props.posts),
  set(state.isLoadingPosts, false)
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