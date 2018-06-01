import page from 'page'
import * as sequences from './sequences'
import * as providers from './providers'

export default ({ app }) => {

  app.on('initialized', () => page.start())

  page('/', ({ path }) => app.runSequence(path, sequences.openPostsPage))
  page('/users/:id', ({ path, params }) => app.runSequence(path, sequences.openUserModal, params))

  return {
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
    },
    providers
  }
}