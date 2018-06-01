import App from 'cerebral'
import Devtools from 'cerebral/devtools'

const app = App({
  state: {
    title: 'My Project',
    posts: [],
    users: {},
    userModal: {
      show: false,
      id: null
    },
    isLoadingPosts: false,
    isLoadingUser: false,
    error: null
  }
}, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})