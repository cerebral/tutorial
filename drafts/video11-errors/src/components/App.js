import React from 'react';
import { state } from 'cerebral';
import { connect } from '@cerebral/react';
import UserModal from './UserModal';
import Post from './Post';

export default connect(
	{
		postsId: state.posts['*'],
		isLoadingPosts: state.isLoadingPosts,
    showUserModal: state.userModal.show,
    error: state.error
	},
	function App({ postsId, isLoadingPosts, showUserModal, error }) {
		return (
			<div className="content">
        <div className="posts">
          {isLoadingPosts ? (
            <h4>Loading posts...</h4>
          ) : postsId.map((id) => <Post key={id} id={id} />)}</div>
          {showUserModal ? <UserModal /> : null}
          {error ? <div className="error">{error}</div> : null}
			</div>
		);
	}
);
