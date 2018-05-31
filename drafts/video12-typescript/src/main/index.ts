import page from 'page'
import * as sequences from './sequences'
import * as providers from './providers'
import * as errors from './errors'
import { State } from './types'

export default ({ app }) => {

  app.on('initialized', () => page.start())

  page('/', ({ path }) => app.runSequence(path, sequences.openPostsPage))
  page('/users/:id', ({ path, params }) => app.runSequence(path, sequences.openUserModal, params))

  const state: State = {
    title: 'My Project',
    posts: {},
    users: {},
    userModal: {
      show: false,
      id: null
    },
    isLoadingPosts: false,
    isLoadingUser: false,
    error: null
  }

  return {
    state,
    providers,
    catch: [
      [errors.ApiError, sequences.setApiError]
    ]
  }
}