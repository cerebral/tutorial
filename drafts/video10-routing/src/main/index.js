import page from 'page'
import * as sequences from './sequences'
import * as providers from './providers'

export default ({ app }) => {

  app.on('initialized', () => page.start())

  page('/', ({ path }) => app.runSequence(path, sequences.openItemsPage))
  page('/users/:id', ({ path, params }) => app.runSequence(path, sequences.openUserModal, params))

  return {
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
    providers
  }
}