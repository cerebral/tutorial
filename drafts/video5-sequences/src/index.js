import App from 'cerebral'
import Devtools from 'cerebral/devtools'
import { state, props, sequences } from 'cerebral/proxy'
import { set } from 'cerebral/factories'

const API_URL = 'https://jsonplaceholder.typicode.com'

function getItems ({ api, get }) {
  const limit = get(state.postsLimit)

  return api.getItems(limit).then(items => ({ items }))
}

function getUser ({ api, props }) {
  return api.getUser(props.id).then(user => ({ user }))
}

const app = App({
  state: {
    title: 'My Project',
    items: [],
    users: {},
    userModal: {
      show: false,
      id: null
    },
    isLoadingItems: false,
    isLoadingUser: false,
    error: null
  },
  sequences: {
    openItemsPage: [
      set(state.isLoadingItems, true),
      getItems,
      set(state.items, props.items),
      set(state.isLoadingItems, false)
    ],
    openUserModal: [
      set(state.userModal.id, props.id),
      set(state.userModal.show, true),
      set(state.isLoadingUser, true),
      getUser,
      set(state.users[props.id], props.user),
      set(state.isLoadingUser, false),
    ],
    closeUserModal: set(state.userModal.show, false)
  },
  providers: {
    api: {
      getItems() {
        return fetch(`${API_URL}/posts`)
          .then(response => response.json())
      },
      getUser(id) {
        return fetch(`${API_URL}/users/${id}`)
          .then(response => response.json())
      }
    }
  }
}, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})

const openItemsPage = app.get(sequences.openItemsPage)
openItemsPage()