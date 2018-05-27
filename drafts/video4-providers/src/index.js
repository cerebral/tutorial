import App from 'cerebral'
import Devtools from 'cerebral/devtools'

const API_URL = 'https://jsonplaceholder.typicode.com'

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