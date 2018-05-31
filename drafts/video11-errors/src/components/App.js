import React from 'react'
import { state } from 'cerebral/proxy'
import { connect } from '@cerebral/react'
import UserModal from './UserModal'
import Post from './Post'

export default connect(
  {
    postsId: state.posts['*'],
    isLoadingposts: state.isLoadingposts,
    showUserModal: state.userModal.show,
    error: state.error
  },
  function App({ postsId, isLoadingposts, showUserModal, error }) {
    if (isLoadingposts) {
      return (
        <div className="content">
          <h4>Loading posts...</h4>
        </div>
      )
    }

    return (
      <div className="content">
        <div className="posts">
          {postsId.map(id => <Post key={id} id={id} />)}
        </div>
        {showUserModal ? <UserModal /> : null}
        {error ? <div className="error">{error}</div>}
      </div>
    )
  }
)