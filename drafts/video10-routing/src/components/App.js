import React from 'react';
import { state } from 'cerebral';
import { connect } from '@cerebral/react';
import UserModal from './UserModal';
import Post from './Post';

export default connect(
	{
		postsId: state.posts['*'],
		isLoadingPosts: state.isLoadingPosts,
		showUserModal: state.userModal.show
	},
	function App({ postsId, isLoadingPosts, showUserModal }) {
		return (
			<div className="content">
        <div className="posts">
          {isLoadingPosts ? (
            <h4>Loading posts...</h4>
          ) : postsId.map((id) => <Post key={id} id={id} />)}</div>
				  {showUserModal ? <UserModal /> : null}
			</div>
		);
	}
);
