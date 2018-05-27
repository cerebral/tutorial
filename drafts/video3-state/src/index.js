import App from 'cerebral'
import Devtools from 'cerebral/devtools'

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
  }
}, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})