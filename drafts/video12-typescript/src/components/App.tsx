import * as React from 'react'
import { state } from 'app.cerebral'
import { connect } from '@cerebral/react'
import UserModal from './UserModal'
import Post from './Post'

const deps = {
  postIds: state.posts['*'],
  isLoadingPosts: state.isLoadingPosts,
  showUserModal: state.userModal.show,
  error: state.error
}

const App: React.SFC<typeof deps> = ({ postIds, isLoadingPosts, showUserModal, error }) => {
  return (
    <div className="content">
        <div className="posts">
          {isLoadingPosts ? (
            <h4>Loading posts...</h4>
          ) : postIds.map(id => <Post key={id} id={id} />)}
        </div>
      )}
      {showUserModal ? <UserModal /> : null}
      {error ? <div className="error">{error}</div> : null}
    </div>
  )
}

export default connect(deps, App)