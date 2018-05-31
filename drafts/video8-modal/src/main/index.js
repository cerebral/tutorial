import * as sequences from './sequences'
import * as providers from './providers'

export default {
  state: {
    title: 'My Project',
    posts: {},
    users: {},
    userModal: {
      show: false,
      id: null
    },
    isLoadingposts: false,
    isLoadingUser: false,
    error: null
  },
  sequences,
  providers
}