import * as sequences from './sequences'
import * as providers from './providers'

export default {
  state: {
    title: 'My Project',
    items: {},
    users: {},
    userModal: {
      show: false,
      id: null
    },
    isLoadingItems: false,
    isLoadingUser: false,
    error: null
  },
  sequences,
  providers
}