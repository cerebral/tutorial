import { sequence, parallel, set, when } from 'cerebral/factories'
import { state, props } from 'cerebral/proxy'
import * as actions from './actions'

export const openItemsPage =  sequence('openItemsPage', [
  when(state.items, items => items.length),
  {
    true: [],
    false: [
      set(state.isLoadingItems, true),
      actions.getItems,
      set(state.items, props.items),
      set(state.isLoadingItems, false)
    ]
  }
])

export const openUserModal = parallel('openUserModal', [
  openItemsPage,
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
