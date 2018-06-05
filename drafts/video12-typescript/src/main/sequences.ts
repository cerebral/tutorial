import { sequence, parallel, set, when } from 'cerebral/factories'
import { state, props } from 'app.cerebral'
import { string } from 'cerebral/tags'
import * as actions from './actions'

export const openPostsPage = sequence('openPostsPage', [
  set(state.userModal.show, false),
  when(state.posts, posts => !!Object.keys(posts).length),
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

export const openUserModal = parallel<{ id: string }>('openUserModal', [
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

export const setApiError = set(
  state.error,
  string`API error: ${props.error.status} - ${props.error.message}`
)