import { state, props } from 'cerebral'
import { sequence, parallel, set, when } from 'cerebral/factories'
import * as actions from './actions'

export const openPostsPage = sequence('openPostsPage', [
  when(state.posts, posts => Object.keys(posts.length)),
  {
    true: [],
    false: [
      set(state.isLoadingPosts, true),
      actions.getPosts,
      set(state.posts, props.posts),
      set(state.isLoadingPosts, false)
    ]
  }
])

export const openUserModal = parallel('openUserModal', [
  openPostsPage,
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
