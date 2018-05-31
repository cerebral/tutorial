import { sequence, parallel, set, when } from 'cerebral/factories'
import { state, props } from 'cerebral/proxy'
import * as actions from './actions'

export const openpostsPage =  sequence('openpostsPage', [
  when(state.posts, posts => posts.length),
  {
    true: [],
    false: [
      set(state.isLoadingposts, true),
      actions.getposts,
      set(state.posts, props.posts),
      set(state.isLoadingposts, false)
    ]
  }
])

export const openUserModal = parallel('openUserModal', [
  openpostsPage,
  [
    set(state.userModal.id, props.id),
    set(state.userModal.show, true),
    when(state.users[props.id]),
    {
      true: [],
      false: [
        set(state.isLoadingUser, true),
        actions.getUser,
        set(state.users[props.id], props.user),
        set(state.isLoadingUser, false),
      ]
    }
  ]
])
