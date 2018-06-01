import React from 'react';
import { state, sequences } from 'cerebral/proxy';
import { connect } from '@cerebral/react';
import UserModal from './UserModal'

export default connect(
	{
		posts: state.posts,
    isLoadingPosts: state.isLoadingPosts,
    showUserModal: state.userModal.show,
		openUserModal: sequences.openUserModal
	},
	function App({ posts, isLoadingPosts, showUserModal, openUserModal }) {
		return (
			<div className="content">
				<div className="posts">
					{isLoadingPosts ? (
            <h4>Loading posts...</h4>
          ) : posts.map((post) => (
						<div key={post.id} className="post" onClick={() => openUserModal({ id: post.userId })}>
							{Post.title}
						</div>
					))}
				</div>
        {showUserModal ? <UserModal /> : null}
			</div>
		);
	}
);
