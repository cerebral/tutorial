import App from 'cerebral'
import Devtools from 'cerebral/devtools'

const API_URL = 'https://jsonplaceholder.typicode.com'

const app = App({
  state: {
    title: 'My Project',
    posts: [],
    users: {},
    userModal: {
      show: false,
      id: null
    },
    isLoadingposts: false,
    isLoadingUser: false,
    error: null
  },
  providers: {
    api: {
      getposts() {
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